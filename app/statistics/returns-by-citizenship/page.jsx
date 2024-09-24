"use client"
import { useEffect, useState } from "react";
import { getReturnByCitizenship } from "../../_utils/GlobalApi";
import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import ChartComponent from "@/app/_components/ChartComponent";
import { usePathname } from "next/navigation";
import countries from "../../_components/_returnByCountry/returnCountries.json";
import DropDown from "@/app/_components/_atoms/DropDown";
import returnYears from "../../../public/_mocks_/returnYears";

const Page = () => {
  const [countryCode, setCountryCode] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // İstek durumunu takip etmek için
  const [selectedYear, setSelectedYear] = useState("");
  
  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null); // Hata mesajını sıfırlıyoruz
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setError(null); // Hata mesajını sıfırlıyoruz
  };
  
  useEffect(() => {
    if (!countryCode || !selectedYear) return; // Eğer ülke veya yıl seçilmemişse istek yapma

    const fetchData = async () => {
      setLoading(true); // İstek başlarken loading'i true yap
      try {
        const result = await getReturnByCitizenship(countryCode, selectedYear); // Asenkron veri alma
        setData(result); // Gelen veriyi güncelle
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err); // Hata yakalama
      } finally {
        setLoading(false); // İstek tamamlandığında loading'i false yap
      }
    };

    fetchData();
    
    // Temizleme fonksiyonu: Eğer countryCode veya year değişmeden önce istek tamamlanmazsa eski isteği temizler
    return () => {
      setLoading(false); // Sayfa değiştiğinde yüklemeyi durduruyoruz
    };
  }, [countryCode, selectedYear]);

  return (
    <div className="w-full mx-6">
      <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={countries}/>
      <DropDown
        label="Please Select Year"
        options={returnYears}
        value={selectedYear}
        onChange={handleYearChange}
      />
      {loading && <p>Loading data...</p>} {/* Yükleme durumu */}
      {error && <p>Error fetching data</p>} {/* Hata mesajı */}

      {countryCode && selectedYear && !loading && !error && (
        <div>
          {
            data.length > 0 ? <ChartComponent data={data} title={`Return by Citizenship - ${countryCode === "gr" ? "Greece" : countryCode === "ge" ? "Germany" : "Country Name"}`}/> : ""
          }
        </div>
      )}
    </div>
  );
};

export default Page;
