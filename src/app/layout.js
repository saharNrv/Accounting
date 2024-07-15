import Navbar from "@/components/module/navbar/Navbar";
import "./globals.css";
import { CultureProvider } from "../../context/CultureProvider";


export const metadata = {
  title: "Accounting App",
  description: "sahar nourivand accounting project with next.js v.14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body >
        <CultureProvider>
          <Navbar />
          {children}

        </CultureProvider>
      </body>
    </html>
  );
}
