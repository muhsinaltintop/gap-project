"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import readmittedCountries from "../../../public/_mocks_/readmittedCountries";
import { getReadmittedCitizens } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import Link from "next/link";

const DataTable = ({ mergedData, country }) => {
  const yearKeys = Object.keys(mergedData[0]).filter(key => key.startsWith('year_'));
  const sourceKeys = Object.keys(mergedData[0]).filter(key => key.startsWith('source_'));

  return (
    <table className="table-auto border-collapse w-full mt-4 shadow-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">{country}</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Source</th>
        </tr>
      </thead>
      <tbody>
        {mergedData && mergedData.length > 0 ? (
          mergedData.map((row, index) => (
            yearKeys.map((yearKey, i) => (
              <tr key={`${index}-${i}`} className={`bg-white ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="border border-gray-300 px-4 py-2">{yearKey.replace('year_', '')}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row[yearKey] !== undefined && row[yearKey] !== -1 
                    ? row[yearKey] 
                    : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row[sourceKeys[i]] && !row[sourceKeys[i]].includes("n/a") ? (
                    <Link href={row[sourceKeys[i]]} className="text-blue-500 hover:underline" target="_blank">
                      {row[sourceKeys[i]]}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))
          ))
        ) : (
          <tr>
            <td className="border border-gray-300 px-4 py-2" colSpan="3">
              No data available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const Page = () => {
  const [countryCode, setCountryCode] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null);
  };

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const mergedData = await getReadmittedCitizens(countryCode); // Seçilen ülkeye göre veri çekiyoruz
        console.log("Fetched Data: ", mergedData); // Veri kontrolü için eklendi
        setData(mergedData); // Gelen veriyi state'e kaydediyoruz
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err); // Hata yakalama
      } finally {
        setLoading(false); // İstek tamamlandığında loading'i false yap
      }
    };

    fetchData();
  }, [countryCode]);

  return (
    <div className="w-full mx-6">
      <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={readmittedCountries} />
      {loading && <p>Loading data...</p>}
      {error && <p>Error fetching data</p>}
      {countryCode && !loading && !error && (
        <div>
          {data.length > 0 ? <DataTable mergedData={data} country={countryCode} /> : <p>No data available</p>}
        </div>
      )}
    </div>
  );
};

export default Page;
