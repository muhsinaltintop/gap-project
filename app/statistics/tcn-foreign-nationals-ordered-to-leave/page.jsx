"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import tcnCountries from "../../_components/_returnByCountry/tcnCountries.json";
import { getTcnReturnDesicionForIrregulars } from "../../_utils/GlobalApi";

const Page = () => {
  const [countryCode, setCountryCode] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // İstek durumunu takip etmek için

  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null); // Hata mesajını sıfırlıyoruz
  };

  useEffect(() => {
    if (!countryCode) return; // Eğer countryCode yoksa istek yapma

    const fetchData = async () => {
      setLoading(true); // İstek başlarken loading'i true yap
      try {
        const result = await getTcnReturnDesicionForIrregulars(countryCode); // Asenkron veri alma
        setData(result); // Gelen veriyi güncelle
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err); // Hata yakalama
      } finally {
        setLoading(false); // İstek tamamlandığında loading'i false yap
      }
    };

    fetchData();

    // Temizleme fonksiyonu: Eğer countryCode değişmeden önce istek tamamlanmazsa eski isteği temizler
    return () => {
      setLoading(false); // Sayfa değiştiğinde yüklemeyi durduruyoruz
    };
  }, [countryCode]);

  return (
    <div className="w-full mx-6">
      <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={tcnCountries} />
      {loading && <p>Loading data...</p>} {/* Yükleme durumu */}
      {error && <p>Error fetching data</p>} {/* Hata mesajı */}

      {countryCode && !loading && !error && (
        <div>
          {data.length > 0 ? (
            data.map((item, index) => (
              <p key={index}>
                {item.year}, Value: {item.value == -1 ? "No Data" : item.value}
              </p>
            ))
          ) : (
            <p>No data available for this country</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
