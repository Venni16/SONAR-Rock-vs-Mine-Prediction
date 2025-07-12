import { useState } from 'react';
import axios from 'axios';

function Sonar() {
  const [input, setInput] = useState(Array(60).fill(''));
  const [prediction, setPrediction] = useState(null);

  // Handle individual box changes
  const handleChange = (index, value) => {
    const newInput = [...input];
    newInput[index] = value;
    setInput(newInput);
  };

  // Handle textarea paste input
  const handlePasteInput = (e) => {
    const raw = e.target.value;
    const values = raw.split(",").map(val => val.trim()).filter(val => val !== '');
    const formatted = values.slice(0, 60);
    const newInput = [...formatted, ...Array(60 - formatted.length).fill("")];
    setInput(newInput);
  };

  const handleSubmit = async () => {
    try {
      const numericInput = input.map(Number);
      const res = await axios.post('http://127.0.0.1:8000/api/predict/', {
        input: numericInput
      });
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error(err);
      setPrediction('Error');
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sonar Prediction</h1>

      {/* Paste input area */}
      <textarea
        placeholder="Paste 60 comma-separated values here..."
        className="w-full p-2 mb-6 border rounded h-24"
        onChange={handlePasteInput}
      ></textarea>

      {/* 60 input boxes */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4">
        {input.map((val, idx) => (
          <input
            key={idx}
            type="number"
            className="border p-1 rounded text-sm"
            value={val}
            onChange={(e) => handleChange(idx, e.target.value)}
            placeholder={`#${idx + 1}`}
          />
        ))}
      </div>

      {/* Predict button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Predict
      </button>

      {/* Prediction Result */}
      {prediction && (
        <p className="mt-4 text-lg font-medium">
          Prediction: <span className="font-bold">{prediction}</span>
        </p>
      )}
    </div>
  );
}

export default Sonar;
