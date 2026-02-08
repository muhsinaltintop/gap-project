import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideMenu from "./_components/SideMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./_components/Footer";

const gothicA1 = Gothic_A1({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: "GAPs Data Repository",
  description: "GAPs Data Repository is an open-access platform providing comprehensive qualitative and quantitative data on national return regimes, launched in 2024 as part of the Horizon Europe project GAPs.",
  openGraph: {
    title: "GAPs Data Repository",
    description: "GAPs Data Repository is an open-access platform providing comprehensive qualitative and quantitative data on national return regimes, launched in 2024 as part of the Horizon Europe project GAPs.",
    url: "https://data.returnmigration.eu/",
    images: [
      {
        url: "https://data.returnmigration.eu/gaps_logo.png",
        width: 500,
        height: 200,
        alt: "Global Property Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAPs Data Repository",
    description: "GAPs Data Repository is an open-access platform providing comprehensive qualitative and quantitative data on national return regimes, launched in 2024 as part of the Horizon Europe project GAPs.",
    images: ["https://data.returnmigration.eu/gaps_logo.png"],
  },
  icons: {
    icon: "/gaps.png", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gothicA1.className}>
        <div className="w-12/12 flex flex-col">
          <Header />
        </div>
        <div className="mx-auto py-4 mb-4 text-xl font-bold text-center bg-primary-light border text-primary">
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
