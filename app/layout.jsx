import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add required font weights
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full h-full ${josefin.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
