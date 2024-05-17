import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideMenu from "./_components/SideMenu";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GAP's Policy Search App",
  description: "14 Country, Different Immigraion Policy Areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="w-12/12 flex flex-col">
          <Header />
        </div>
        <div className="flex w-12/12">
          <SideMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
