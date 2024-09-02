import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideMenu from "./_components/SideMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./_components/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GAPs Policy Search App",
  description: "14 Country, Different Immigraion Policy Areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="w-12/12 flex flex-col">
          <Header />
        </div>
        <div className="w-4/12 mx-auto my-4 text-xl font-bold text-center bg-primary border rounded-lg text-white">
          {"GAPs DATA REPOSITORY"}
        </div>
        <div className="flex w-12/12">
          <div className="w-80">
            <SideMenu />
          </div>
          {children}
          <SpeedInsights />
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
