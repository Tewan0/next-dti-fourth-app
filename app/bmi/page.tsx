"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  //validate input
  const validateInput = () => {
    if (!weight || !height) {
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ครบถ้วน");
      return false;
    }
    return true;
  };

  const calculateBMI = () => {
    if (validateInput()) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2)));
    }
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(0);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {/* Main Card */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 sm:mx-0 border border-gray-200">
        {/* Card Content */}
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">BMI Calculator</h1>

          {/* Subtitle */}
          <p className="text-lg font-medium text-gray-600 -mt-2">
            คำนวณ BMI ของคุณ
          </p>

          {/* BMI Image */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M13 7h-2v5H7v2h4v5h2v-5h4v-2h-4z" />
            </svg>
          </div>

          {/* Input: Weight */}
          <div className="w-full">
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="เช่น 65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Input: Height */}
          <div className="w-full">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="เช่น 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center space-x-4 pt-2">
            <button
              onClick={calculateBMI}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              คำนวณ BMI
            </button>
            <button
              onClick={resetFields}
              className="bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              รีเซ็ต
            </button>
          </div>

          {/* Result Display */}
          <div className="w-full text-center">
            <p className="text-xl font-bold text-gray-800">
              ค่า BMI ที่คำนวณได้:
            </p>
            <p
              id="bmiResult"
              className="text-3xl font-extrabold text-blue-600 mt-1"
            >
              {bmi}
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="w-full text-center pt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}