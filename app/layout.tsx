import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025 by DTI-SAU",
  description: "เครื่องคำนวณหลากหลายรูปแบบโดย DTI-SAU",
  keywords: ["Calculator", "Car Installment", "BMI", "BMR", "เครื่องคิดเลข", "เครื่องคำนวณ"],
  icons: {
    icon: "/calculatorIcon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
