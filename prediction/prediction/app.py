from flask import Flask, request, jsonify, Response
from joblib import load
import os
import json

# Đường dẫn tới thư mục models
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, 'models')

# Load các thành phần đã lưu
model = load(os.path.join(MODEL_DIR, 'random_forest_model.pkl'))
vectorizer = load(os.path.join(MODEL_DIR, 'tfidf_vectorizer.pkl'))
label_encoder = load(os.path.join(MODEL_DIR, 'label_encoder.pkl'))

# Đọc dữ liệu bệnh và chuyên khoa từ tệp CSV đã lọc
import pandas as pd
df = pd.read_csv('medical_conditions.csv')
class_counts = df['Disease Name'].value_counts()
df_filtered = df[df['Disease Name'].isin(class_counts[class_counts > 1].index)]

# Hàm dự đoán bệnh và chuyên khoa
def predict_disease(symptoms_input):
    # Biến đổi triệu chứng nhập vào thành vector TF-IDF
    symptoms_vector = vectorizer.transform([symptoms_input])

    # Dự đoán bệnh
    predicted_label = model.predict(symptoms_vector)
    predicted_disease = label_encoder.inverse_transform(predicted_label)

    # Lấy chuyên khoa từ cột 'Disease_Specialty' dựa trên tên bệnh đã dự đoán
    predicted_specialty = df_filtered[df_filtered['Disease Name'] == predicted_disease[0]]['Specialty'].values[0]

    return predicted_disease[0], predicted_specialty

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Lấy dữ liệu triệu chứng từ yêu cầu POST
    data = request.get_json()
    symptoms_input = data.get('symptoms', '')

    # Dự đoán bệnh và chuyên khoa
    predicted_disease, predicted_specialty = predict_disease(symptoms_input)

    # Trả kết quả dưới dạng JSON với ensure_ascii=False
    response = {
        'predicted_disease': predicted_disease,
        'predicted_specialty': predicted_specialty
    }
    return Response(
        response=json.dumps(response, ensure_ascii=False),
        status=200,
        mimetype='application/json'
    )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
