import os
from joblib import load

# Định nghĩa đường dẫn tới thư mục models
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, 'models')

# Load các thành phần đã lưu
model = load(os.path.join(MODEL_DIR, 'random_forest_model.pkl'))  # Load mô hình
vectorizer = load(os.path.join(MODEL_DIR, 'tfidf_vectorizer.pkl'))  # Load vectorizer
label_encoder = load(os.path.join(MODEL_DIR, 'label_encoder.pkl'))  # Load label encoder

# Hàm kiểm tra mô hình
def test_model():
    # Ví dụ triệu chứng để kiểm tra
    test_symptoms = "Đau đầu , buồn nôn, chóng mặt,sốt"

    # Chuyển triệu chứng thành vector TF-IDF
    symptoms_vector = vectorizer.transform([test_symptoms])

    # Dự đoán bệnh
    predicted_label = model.predict(symptoms_vector)
    predicted_disease = label_encoder.inverse_transform(predicted_label)

    # In ra kết quả dự đoán
    print(f"Triệu chứng: {test_symptoms}")
    print(f"Bệnh được dự đoán: {predicted_disease[0]}")

# Gọi hàm kiểm tra
if __name__ == "__main__":
    test_model()
