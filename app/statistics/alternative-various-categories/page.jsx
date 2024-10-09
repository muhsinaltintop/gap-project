"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import tcnCountries from "../../_components/_returnByCountry/tcnCountries.json";
import { getAllAlternativeData } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import Link from "next/link";
import TabNavigation from "@/app/_components/_atoms/TabNavigation";

const DataTable = ({ mergedData }) => {
  return (
    <table className="table-auto border-collapse w-full mt-4 shadow-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Voluntary Return</th>

        </tr>
      </thead>
      <tbody>
        {mergedData.map((row, index) => (
          <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.alternative}</td>
          </tr>
        ))}
        <tr className="bg-gray-200">
          <td className="border border-gray-300 px-4 py-2 font-bold">Source</td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlAlternative != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlAlternative} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceAlternative}
              </Link>
            ) : (
              "n/a"
            )}
          </td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2 font-bold">Notes:</td>
          <td className="border border-gray-300 px-4 py-2" colSpan="5">{mergedData[0]?.additionalNote || "No notes available"}</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2 font-bold">*n/a</td>
        <td className="border border-gray-300 px-4 py-2" colSpan="5">Data is not avalible.</td>
        </tr>
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

  const tabs = [
    { label: 'Note on Alternative/Various Categories(National)', content: <div className="max-w-6xl text-sm text-justify">

      <div className="my-2">This section contains any related national category/type of official (annual) data on return, under different headings (e.g. &quot;deportation&quot;, &quot;removal&quot;, &quot;repatriation&quot;) than that collected in the previous categories of the Repository.  
      </div>
      <div className="my-2">
      When national statistics do not fit the previous categories, alternatives are indicated in the table below. 
      </div>
      </div> },
    { label: null, content: null },
    
    { label: null, content: null },
    { label: null, content: null },
  ];

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const mergedData = await getAllAlternativeData(countryCode); // Tüm verileri çekiyoruz
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
      <div className="mt-2">
        {console.log("cC", countryCode)}
        
        <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={tcnCountries} />
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data</p>}
        {countryCode && !loading && !error && (
          <div>
            <div>
              {console.log("data:", data)}
            {data.length > 0 ? <DataTable mergedData={data} /> : <p>No data available</p>}
            </div>
            <div className="my-4">
              <TabNavigation tabs={tabs} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
