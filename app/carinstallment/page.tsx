'use client';

export default function Page() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {/* Main Card Container */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 sm:mx-0 border border-gray-200">
        {/* Card Content */}
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">Car Installment Calculator</h1>

          {/* Subtitle */}
          <p className="text-lg font-medium text-gray-600 -mt-2">คำนวณยอดผ่อนชำระรถยนต์</p>

          {/* Car Image */}
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M12 10h-2V8h2v2zm-2 4h2v2h-2v-2zm4-4h2v2h-2v-2zm-2 4h2v2h-2v-2z" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>

          {/* Input: Name */}
          <div className="w-full text-left">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อผู้คำนวณ</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ชื่อ-นามสกุล"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Input: Car Price */}
          <div className="w-full text-left">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">ราคารถ (บาท)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="เช่น 800000"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Input: Interest Rate */}
          <div className="w-full text-left">
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">ดอกเบี้ยต่อปี (%)</label>
            <input
              type="number"
              id="interest"
              name="interest"
              placeholder="เช่น 2.5"
              step="0.01"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Input: Down Payment Percentage */}
          <div className="w-full text-left">
            <label className="block text-sm font-medium text-gray-700">เงินดาวน์ (%)</label>
            <div className="mt-2 flex flex-wrap gap-4">
              {["15", "20", "25", "30", "35"].map((value) => (
                <div className="flex items-center" key={value}>
                  <input
                    type="radio"
                    id={`down-${value}`}
                    name="down-payment"
                    value={value}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor={`down-${value}`} className="ml-2 text-gray-700">{value}%</label>
                </div>
              ))}
            </div>
          </div>

          {/* Input: Loan Term */}
          <div className="w-full text-left">
            <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">จำนวนเดือนที่ผ่อน</label>
            <select
              id="loan-term"
              name="loan-term"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            >
              {[12, 24, 36, 48, 60, 72].map((term) => (
                <option value={term} key={term}>{term} เดือน</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center space-x-4 pt-4">
            <button
              className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              คำนวณ
            </button>
            <button
              className="bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              ล้างข้อมูล
            </button>
          </div>

          {/* Result Display */}
          <div className="w-full text-center pt-4">
            <p className="text-xl font-bold text-gray-800">ยอดผ่อนชำระต่อเดือน:</p>
            <p id="result" className="text-3xl font-extrabold text-indigo-600 mt-1">0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}