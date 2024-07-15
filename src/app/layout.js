import Navbar from "@/components/module/navbar/Navbar";
import "./globals.css";
import { CultureProvider } from "../../context/CultureProvider";
import ClientOnly from "@/components/client_only/ClientOnly";


export const metadata = {
  title: "Accounting App",
  description: "sahar nourivand accounting project with next.js v.14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body >
        <ClientOnly>
          <CultureProvider>
            <Navbar />
            {children}

          </CultureProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
