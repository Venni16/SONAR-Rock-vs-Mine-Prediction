# SONAR Rock vs Mine Prediction with FULL STACK + ML

## Project Description
This project predicts whether an object detected by sonar is a rock or a mine using machine learning techniques. The core of the project involves analyzing sonar signal data and training a Logistic Regression model to classify the objects accurately.

## Dataset Description
The dataset used is sonar data consisting of 60 numerical features representing sonar signal returns. The target labels are:
- **R**: Rock
- **M**: Mine

The dataset is stored in `sonar_data.csv`.

## Model Training
The model training and evaluation are performed in the Jupyter notebook `SONAR_Rock_vs_Mine_Prediction.ipynb`. Key steps include:
- Loading and exploring the dataset.
- Splitting the data into training and test sets (90% train, 10% test).
- Training a Logistic Regression model.
- Evaluating accuracy on both training and test data.
- Saving the trained model as `sonar_model.pkl`.

## Backend Setup and API Usage
The backend is built with Django and Django REST Framework. It exposes a REST API endpoint to serve predictions.

- The API endpoint is: `POST /api/predict/`
- It expects a JSON payload with an array of 60 sonar feature values under the key `"input"`.
- Returns a JSON response with the prediction (`"R"` for rock or `"M"` for mine).

The backend loads the pre-trained model `sonar_model.pkl` to make predictions.

### Running the Backend
1. Navigate to the `server` directory.
2. Install dependencies (preferably in a virtual environment):
   ```
   pip install django djangorestframework scikit-learn pandas joblib
   ```
3. Run the Django development server:
   ```
   python manage.py runserver
   ```
4. The API will be available at `http://127.0.0.1:8000/api/predict/`.

## Frontend Setup and Usage
The frontend is a React application built with Vite. It provides a user interface to input sonar data and get predictions from the backend.

### Running the Frontend
1. Navigate to the `frontend/sonar` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`) in a browser.

### Using the Frontend
- Paste or enter 60 comma-separated sonar feature values in the input area.
- Click the "Predict" button.
- The prediction result ("R" for rock or "M" for mine) will be displayed.

## How to Use the Application
1. Start the backend server.
2. Start the frontend server.
3. Open the frontend in a browser.
4. Input sonar data and submit to get predictions.

## Dependencies
- Backend:
  - Python 3.x
  - Django
  - Django REST Framework
  - numpy
  - joblib
- Frontend:
  - Node.js
  - React
  - Vite
  - axios
  - tailwindcss
 
