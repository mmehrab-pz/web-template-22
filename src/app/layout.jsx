import { Sora } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  weight: ['100','200','300','400','500','600','700','800'],
  subsets: ['latin'], 
  variable: '--font-sora',
})

export const metadata = {
  title: "Aimug",
  description: "mehrab pourzakaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${soraFont.variable} antialiased`}
      >
        <main className="bg-[#111022] w-full h-[500vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
