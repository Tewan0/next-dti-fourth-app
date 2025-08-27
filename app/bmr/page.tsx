'use client';
import { useState } from 'react';

export default function Page() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(0);

  const calculateBMR = () => {
    if (weight && height && age && gender) {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);
      const ageValue = parseFloat(age);

      let bmrValue = 0;
      if (gender === 'male') {
        bmrValue = 66 + 13.7 * weightValue + 5 * heightValue - 6.8 * ageValue;
      } else if (gender === 'female') {
        bmrValue = 655 + 9.6 * weightValue + 1.8 * heightValue - 4.7 * ageValue;
      }

      setBmr(parseFloat(bmrValue.toFixed(2)));
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setBmr(0);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {/* Main Card Container */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 sm:mx-0 border border-gray-200">
        {/* Card Content */}
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">BMR Calculator</h1>

          {/* Subtitle */}
          <p className="text-lg font-medium text-gray-600 -mt-2">คำนวณ BMR ของคุณ</p>

          {/* Input: Weight */}
          <div className="w-full flex items-center justify-between">
            <label htmlFor="weight" className="text-sm font-medium text-gray-700">
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="เช่น 65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 w-2/3 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out text-right"
            />
          </div>

          {/* Input: Height */}
          <div className="w-full flex items-center justify-between">
            <label htmlFor="height" className="text-sm font-medium text-gray-700">
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="เช่น 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 w-2/3 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out text-right"
            />
          </div>

          {/* Input: Age */}
          <div className="w-full flex items-center justify-between">
            <label htmlFor="age" className="text-sm font-medium text-gray-700">
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="เช่น 30"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 w-2/3 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out text-right"
            />
          </div>

          {/* Gender Selection */}
          <div className="w-full flex items-center justify-between">
            <label htmlFor="gender" className="text-sm font-medium text-gray-700">
              เพศ
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="male" className="ml-2 text-gray-700">
                  ชาย
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="female" className="ml-2 text-gray-700">
                  หญิง
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center space-x-4 pt-4">
            <button
              onClick={calculateBMR}
              className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              คำนวณ BMR
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
          <div className="w-full text-center pt-4">
            <p className="text-xl font-bold text-gray-800">ค่า BMR ที่คำนวณได้:</p>
            <p id="bmrResult" className="text-3xl font-extrabold text-teal-600 mt-1">
              {bmr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}