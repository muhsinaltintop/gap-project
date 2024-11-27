"use client";
import { useEffect, useState } from "react";
import { getReturnByCitizenship } from "../../_utils/GlobalApi";
import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import RbcChartComponent from "../../_components/_returnByCountry/RbcChartComponent";
import countries from "../../_components/_returnByCountry/returnCountries.json";
import DropDown from "@/app/_components/_atoms/DropDown";
import allCountries from "../../../public/_mocks_/countryList.json";

const Page = () => {
  const [countryCode, setCountryCode] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // İstek durumunu takip etmek için
  const [selectedYear, setSelectedYear] = useState("");
  const [returnYears, setReturnYears] = useState([]); // Yıllar için state

  // Ülke değişimini işleme
  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null); // Hata mesajını sıfırlıyoruz
  };

  // Yıl değişimini işleme
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setError(null); // Hata mesajını sıfırlıyoruz
  };

  // Dropdown için yılları API'den çek
  useEffect(() => {
    const fetchYears = async () => {
      setLoading(true);
      try {
        const years = await getReturnByCitizenship(countryCode, "years");
        
        // Years array'ini istediğiniz formata dönüştür
        const formattedYears = years.map((year) => ({
          value: year.toString(),
          label: year.toString(),
        }));
  
        setReturnYears(formattedYears); // Yılları güncelle
      } catch (err) {
        console.error("Error fetching years: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchYears();
  }, [countryCode]); // Bu sadece component mount olduğunda çalışır
  

  // Seçili ülke ve yıl için veriyi API'den çek
  useEffect(() => {
    if (!countryCode || !selectedYear) return; // Eğer ülke veya yıl seçilmemişse istek yapma

    const fetchData = async () => {
      setLoading(true); // İstek başlarken loading'i true yap
      try {
        const result = await getReturnByCitizenship(countryCode, "data", selectedYear); // Asenkron veri alma
        
        // 0 değerleri filtrele
        const filteredData = result.map((item) =>
          Object.fromEntries(
            Object.entries(item).filter(([key, value]) => value !== 0 || key === "id" || key === "year")
          )
        );
        setData(filteredData); // Gelen veriyi güncelle
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
    <div className="w-9/10 mx-6">
      <div className="my-2 max-w-6xl">
        This section contains statistics on the number of TCNs/foreign nationals who have left the territory by citizenship. The top ten countries for each year are listed specifically in the table below, other nationalities are given in total.
      </div>
      <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={countries} />
      <DropDown
        label="Please Select Year"
        options={returnYears} // Dropdown seçeneklerini API'den gelen yıllar olarak ayarlıyoruz
        value={selectedYear}
        onChange={handleYearChange}
      />
      {loading && <p>Loading data...</p>} {/* Yükleme durumu */}
      {error && <p>Error fetching data</p>} {/* Hata mesajı */}

      {countryCode && selectedYear && !loading && !error && (
        <div>
          <div>
            {data.length > 0 ? (
              data.every((item) => Object.keys(item).length === 2 && item.id && item.year) ? (
                <p className="text-primary text-xl my-20">No data found...</p>
              ) : (
                <RbcChartComponent data={data} title={"Returns by Citizenship"} countries={allCountries} />
              )
            ) : (
              ""
            )}
          </div>

          <div className="my-2">
            <div className="my-2 max-w-6xl text-justify">
              * Third Country Nationals (TCN) refers to a person who does not have the nationality of one of the EU member states, nor the nationality of one of the countries associated with the EU (Iceland, Liechtenstein, Norway and Switzerland). For the non-EU countries, TCNs corresponds to &quot;foreign nationals&quot; subject to the removal.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
