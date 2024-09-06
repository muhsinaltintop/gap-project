"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import tcnCountries from "../../_components/_returnByCountry/tcnCountries.json";
import { fetchAllData } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import PageTitle from "@/app/_components/_atoms/PageTitle";

const DataTable = ({ mergedData }) => {
  return (
    <table className="table-auto border-collapse border border-gray-500 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-600 px-4 py-2">Year</th>
          <th className="border border-gray-600 px-4 py-2">Return Desicions Issued for Irregular Migrants</th>
          <th className="border border-gray-600 px-4 py-2">TCNs/Foreign Nationals Returned Following an Order to Leave</th>
          <th className="border border-gray-600 px-4 py-2">Return Decision Issued Upon Negative Asylum Applications</th>
          <th className="border border-gray-600 px-4 py-2">Third Country Unaccompanied Minors Returned Following an Order to Leave</th>
          <th className="border border-gray-600 px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {mergedData.map((row, index) => (
          <tr key={index}>
            <td className="border border-gray-600 px-4 py-2">{row.year}</td>
            <td className="border border-gray-600 px-4 py-2">{row.returnDesicionsForIrregulars}</td>
            <td className="border border-gray-600 px-4 py-2">{row.returnFollowingOrder}</td>
            <td className="border border-gray-600 px-4 py-2">{row.returnNegativeAsylum}</td>
            <td className="border border-gray-600 px-4 py-2">{row.returnedMinors}</td>
            <td className="border border-gray-600 px-4 py-2">{row.returnTotal}</td>
          </tr>
        ))}
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
        const mergedData = await fetchAllData(countryCode); // Tüm verileri çekiyoruz
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
      <PageTitle title="TCN Foreign Nationals Ordered to Leave"/>
      <div className="mt-2">
        <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={tcnCountries} />
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data</p>}
        {countryCode && !loading && !error && (
          <div>
            {data.length > 0 ? <DataTable mergedData={data} /> : <p>No data available</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
