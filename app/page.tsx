import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
            เครื่องมือ<span className="text-indigo-600">คำนวณ</span>ออนไลน์
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            เลือกเครื่องมือที่คุณต้องการใช้เพื่อเริ่มต้น
          </p>
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: BMI Calculator */}
          <Link href="/bmi" className="block cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden card-shadow h-full flex flex-col justify-between">
              <div className="p-6">
                <div className="relative w-full h-48 mb-4">
                  <img
                    src="https://placehold.co/400x200/4F46E5/ffffff?text=BMI"
                    alt="BMI"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  คำนวณ BMI
                </h2>
                <p className="text-gray-600">
                  คำนวณดัชนีมวลกายของคุณและตรวจสอบว่าคุณมีน้ำหนักที่เหมาะสมหรือไม่
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <span className="text-indigo-600 font-medium hover:text-indigo-800">
                  เริ่มต้นคำนวณ &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: BMR Calculator */}
          <Link href="/bmr" className="block cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden card-shadow h-full flex flex-col justify-between">
              <div className="p-6">
                <div className="relative w-full h-48 mb-4">
                  <img
                    src="https://placehold.co/400x200/10B981/ffffff?text=BMR"
                    alt="BMR"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  คำนวณ BMR
                </h2>
                <p className="text-gray-600">
                  คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐานเพื่อดูว่าร่างกายคุณเผาผลาญแคลอรี่เท่าไรในแต่ละวัน
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <span className="text-emerald-600 font-medium hover:text-emerald-800">
                  เริ่มต้นคำนวณ &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Car Installment Calculator */}
          <Link href="/carinstallment" className="block cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden card-shadow h-full flex flex-col justify-between">
              <div className="p-6">
                <div className="relative w-full h-48 mb-4">
                  <img
                    src="https://placehold.co/400x200/F97316/ffffff?text=CAR"
                    alt="Car Installment"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  คำนวณการผ่อนรถ
                </h2>
                <p className="text-gray-600">
                  ประมาณการยอดผ่อนชำระต่อเดือนสำหรับสินเชื่อรถยนต์ของคุณ
                  เพื่อวางแผนทางการเงิน
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <span className="text-orange-500 font-medium hover:text-orange-700">
                  เริ่มต้นคำนวณ &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}