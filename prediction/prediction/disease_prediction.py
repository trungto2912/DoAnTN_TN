import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split, StratifiedKFold, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import os
from joblib import dump

# Bước 1: Đọc file CSV
df = pd.read_csv('medical_conditions.csv')

# Kiểm tra số lượng mẫu trong từng lớp để lọc các lớp có ít mẫu
class_counts = df['Disease Name'].value_counts()
print(f"Số lượng mẫu trong từng lớp: \n{class_counts}")

# Lọc ra các lớp có số mẫu lớn hơn 1
df_filtered = df[df['Disease Name'].isin(class_counts[class_counts > 1].index)]

# Bước 2: Tiền xử lý dữ liệu
# Kết hợp triệu chứng vào một chuỗi văn bản duy nhất cho mỗi bệnh
df_filtered.loc[:, 'Symptoms'] = df_filtered[['Symptom 1', 'Symptom 2', 'Symptom 3', 'Symptom 4', 'Symptom 5', 'Symptom 6', 'Symptom 7']].apply(
    lambda row: ' '.join(row.dropna().values), axis=1)

# Bước 3: Vector hóa triệu chứng bằng TF-IDF
vectorizer = TfidfVectorizer(stop_words='english')

# Chuyển đổi triệu chứng thành ma trận TF-IDF
X = vectorizer.fit_transform(df_filtered['Symptoms'])

# Bước 4: Chuyển đổi tên bệnh thành các nhãn số (Label Encoding)
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(df_filtered['Disease Name'])

# Bước 5: Chia dữ liệu thành tập huấn luyện và tập kiểm tra
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Bước 6: Tạo mô hình Random Forest và huấn luyện
rf_model = RandomForestClassifier(random_state=42)

# Bước 7: Tạo StratifiedKFold với n_splits = 3 để tránh lỗi khi có lớp với ít mẫu
skf = StratifiedKFold(n_splits=3)

# Cấu hình tham số grid cho RandomForest
param_grid = {
    'n_estimators': [50, 100, 150],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10]
}

# Tạo GridSearchCV để tìm kiếm tham số tốt nhất
grid_search = GridSearchCV(rf_model, param_grid, cv=skf, n_jobs=-1, verbose=2)

# Huấn luyện mô hình với GridSearchCV
grid_search.fit(X_train, y_train)

# In ra các tham số tốt nhất từ GridSearchCV
print(f'Best Parameters: {grid_search.best_params_}')

# Bước 8: Dự đoán và đánh giá mô hình sau khi tối ưu hóa
best_rf_model = grid_search.best_estimator_
y_pred = best_rf_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy * 100:.2f}%')

# Bước 9: Hàm dự đoán bệnh dựa trên triệu chứng người dùng nhập
def predict_disease(symptoms_input):
    # Biến đổi triệu chứng nhập vào thành vector TF-IDF
    symptoms_vector = vectorizer.transform([symptoms_input])

    # Dự đoán bệnh
    predicted_label = best_rf_model.predict(symptoms_vector)

    # Chuyển label thành tên bệnh
    predicted_disease = label_encoder.inverse_transform(predicted_label)

    # Lấy chuyên khoa từ cột 'Disease_Specialty' dựa trên tên bệnh đã dự đoán
    predicted_specialty = df_filtered[df_filtered['Disease Name'] == predicted_disease[0]]['Specialty'].values[0]

    # Trả về tên bệnh và chuyên khoa
    return predicted_disease[0], predicted_specialty

# Ví dụ về cách sử dụng hàm dự đoán:
user_input = "Ho, đau ngực , sốt, cảm thấy mệt mỏi"
predicted_disease = predict_disease(user_input)
print(f'Disease prediction for symptoms "{user_input}": {predicted_disease}')

# Kiểm tra dự đoán cho các triệu chứng mẫu

symptoms_list = [
    "Đau họng, sốt, ho, mệt mỏi",                  # Triệu chứng của bệnh Đau họng
    "Khó thở, đau ngực, mệt mỏi, ho",             # Triệu chứng của bệnh Viêm phổi
    "Đau bụng, buồn nôn, ợ hơi, tiêu chảy",       # Triệu chứng của bệnh Viêm phúc mạc
    "Ngứa, nổi mẩn đỏ, bong tróc da, đau khớp",    # Triệu chứng của bệnh Vảy nến thể mảng
    "Chảy máu cam, nghẹt mũi, đau đầu, ho",       # Triệu chứng của bệnh Chảy máu cam
    "Sốt, mệt mỏi, khó thở, đau cơ",              # Triệu chứng của bệnh Cảm cúm
    "Nổi mụn nước, ngứa, mẩn đỏ, sốt",            # Triệu chứng của bệnh Chốc lở
    "Đau tai, ngứa tai, sưng tai, sốt",            # Triệu chứng của bệnh Viêm tai ngoài
    "Khó nuốt, ho, đau họng, sốt",                # Triệu chứng của bệnh Viêm amidan
    "Mỏi mắt, khó nhìn gần, đau đầu, chóng mặt",   # Triệu chứng của bệnh Cận thị
]

# Dự đoán cho mỗi bộ triệu chứng
for symptoms_input in symptoms_list:
    predicted_disease, predicted_specialty = predict_disease(symptoms_input)
    print(f'Triệu chứng: "{symptoms_input}" -> Bệnh dự đoán: {predicted_disease} (Chuyên khoa: {predicted_specialty})')


# Tạo thư mục models nếu chưa tồn tại
os.makedirs('models', exist_ok=True)

# Lưu mô hình đã huấn luyện
dump(best_rf_model, 'models/random_forest_model.pkl')  # Lưu mô hình Random Forest
dump(vectorizer, 'models/tfidf_vectorizer.pkl')        # Lưu vectorizer TF-IDF
dump(label_encoder, 'models/label_encoder.pkl')        # Lưu LabelEncoder

print("Mô hình và các thành phần đã được lưu vào thư mục 'models' thành công!")
