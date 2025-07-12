import numpy as np
import joblib
from rest_framework.decorators import api_view
from rest_framework.response import Response
import os

# Load model (adjust path if needed)
model_path = os.path.join(os.path.dirname(__file__), 'sonar_model.pkl')
model = joblib.load(model_path)

@api_view(['POST'])
def predict(request):
    try:
        data = request.data.get('input', [])
        if len(data) != 60:
            return Response({'error': 'Input must contain 60 numbers'}, status=400)

        input_array = np.array(data).reshape(1, -1)
        prediction = model.predict(input_array)[0]
        return Response({'prediction': str(prediction)})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
