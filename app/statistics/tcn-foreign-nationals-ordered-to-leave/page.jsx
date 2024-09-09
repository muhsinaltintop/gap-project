"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import tcnCountries from "../../_components/_returnByCountry/tcnCountries.json";
import { fetchAllData } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import PageTitle from "@/app/_components/_atoms/PageTitle";
import Link from "next/link";

const DataTable = ({ mergedData }) => {
  return (
    <table className="table-auto border-collapse w-full mt-4 shadow-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Return Desicions Issued for Irregular Migrants</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">TCNs/Foreign Nationals Returned Following an Order to Leave</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Return Decision Issued Upon Negative Asylum Applications</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Third Country Unaccompanied Minors Returned Following an Order to Leave</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        {mergedData.map((row, index) => (
          <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.returnDesicionsForIrregulars}</td>
            <td className="border border-gray-300 px-4 py-2">{row.returnFollowingOrder}</td>
            <td className="border border-gray-300 px-4 py-2">{row.returnNegativeAsylum}</td>
            <td className="border border-gray-300 px-4 py-2">{row.returnedMinors}</td>
            <td className="border border-gray-300 px-4 py-2">{row.returnTotal}</td>
          </tr>
        ))}
        <tr className="bg-gray-200">
          <td className="border border-gray-300 px-4 py-2 font-bold">Source</td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnDecisionsIrregular != "N/A" || undefined ? (
              <Link href={mergedData[0]?.urlReturnDecisionsIrregular} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnDecisionsIrregular}
              </Link>
            ) : (
              "N/A"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnFollowingOrder != "N/A" || undefined ? (
              <Link href={mergedData[0]?.urlReturnFollowingOrder} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnFollowingOrder}
              </Link>
            ) : (
              "N/A"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnNegativeAsylum != "N/A" || undefined ? (
              <Link href={mergedData[0]?.urlReturnNegativeAsylum} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnNegativeAsylum}
              </Link>
            ) : (
              "N/A"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnedMinors != "N/A" || undefined ? (
              <Link href={mergedData[0]?.urlReturnedMinors} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnedMinors}
              </Link>
            ) : (
              "N/A"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlTotalOrderReturn != "N/A" || undefined ? (
              <Link href={mergedData[0]?.urlTotalOrderReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceTotalOrderReturn}
              </Link>
            ) : (
              "N/A"
            )}
          </td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2 font-bold">Notes:</td>
          <td className="border border-gray-300 px-4 py-2" colSpan="5">{mergedData[0]?.additionalNote || "No notes available"}</td>
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
