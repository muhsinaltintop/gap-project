"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import alternativeVariousCountries from "../../../public/_mocks_/alternativeVariousCountries"
import { getAlternativeSource, getAvc } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import Link from "next/link";
import { Tooltip as MuiTooltip } from '@mui/material';
import { CircleHelp } from "lucide-react";
import originalData from "../../../public/_mocks_/originalData.json"



const Page = () => {
  const [countryCode, setCountryCode] = useState("");
  const [data, setData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const source = originalData.find(entry => entry.title ==="Alternative/Various Return Categories (National)")

  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null);
  };

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const mergedData = await getAvc(countryCode); // Tüm verileri çekiyoruz       
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


  useEffect(()=> {
    if (!countryCode) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const source = await getAlternativeSource(countryCode)
        setSourceData(source)
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err); // Hata yakalama
      } finally {
        setLoading(false); // İstek tamamlandığında loading'i false yap
      }
    };

    fetchData()
  }, [countryCode])

  return (
    <div className="w-9/10 mx-6">
      <div className="my-4 max-w-6xl">
              <div className="my-2">This section contains any related national category/type of official (annual) data on return, under different headings (e.g. &quot;deportation&quot;, &quot;removal&quot;, &quot;repatriation&quot;) than that collected in the previous categories of the Repository.  
              </div>
              <div className="my-2">
              When national statistics do not fit the previous categories, alternatives are indicated in the table below. 
              </div>
            </div>
      <div className="mt-2">    
        <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={alternativeVariousCountries} />
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data</p>}
        {countryCode && !loading && !error && (
          <div>
            <div>
            {data.length > 0 ? <DataTable countryCode={countryCode} mergedData={data} sourceData={sourceData} /> : <p>No data available</p>}
            <div className="flex font-bold justify-between mt-4 mb-4">
            <div className="flex gap-1">

            Original Data:
            <Link href={`${source?.originalData}`} target="_blank"> <span className="font-normal text-primary">

            {source?.title}
            </span>
            </Link>
              <MuiTooltip title="The above data are secondary data compiled from different sources. Please click here to see
  the original sources and access the raw data for the entire dataset. You will also find all
  appendixes and attached original files, if available, stored in the REDCap for the Data
  Repository via the public report link.">
            <CircleHelp className="size-3" color="#0d7dff" />
            </MuiTooltip>
        </div>
        <div className="font-bold text-primary">
          <Link href={'/data-entry-teams'}>
          Data Entry Teams  
          </Link>
        </div>
            </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

const DataTable = ({ mergedData, countryCode, sourceData }) => {
  return (
    <table className="table-auto border-collapse w-full mt-4 shadow-lg">
      <thead>
        {countryCode === "germany" ? (
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Deportation (Zurückschiebung)</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Illegal Entries</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Persons Obliged to Leave the Country</th>
        </tr>) : countryCode === "netherlands" ? ( 
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Independent Returns Without Supervision (Zelfstandig Vertrokken Zonder Toezicht)</th>
        </tr>) : countryCode === "nigeria" ? (<tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Repatriation</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Deportation Figures</th>
        </tr>): "" }
      </thead>
      <tbody>
        {mergedData.map((row, index) => (
          
          countryCode === "germany" ? (<tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.deportation}</td>
            <td className="border border-gray-300 px-4 py-2">{row.illegalEntries}</td>
            <td className="border border-gray-300 px-4 py-2">{row.personsObligedToLeave}</td>
          </tr>) : countryCode === "netherlands" ? (<tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.independentReturn}</td>
          </tr>

          ) : countryCode === "nigeria" ? (<tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.repatriation}</td>
            <td className="border border-gray-300 px-4 py-2">{row.deportationFigures}</td>
          </tr>) : ("")
        ))}
        <tr className="bg-gray-200">
          <td className="border border-gray-300 px-4 py-2 font-bold">Source</td>

          {sourceData.map((row, index)=> (<td key={index} className="border border-gray-300 px-4 py-2">{<Link href={row.url}>{row.source}</Link>}</td>)
        )}

        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2 font-bold">Notes:</td>
          {sourceData.map((row, index)=> (<td key={index} className="border border-gray-300 px-4 py-2">{row.additionalNotes}</td>))}
        </tr>


        <tr>
        <td className="border border-gray-300 px-4 py-2 font-bold">*n/a</td>
        <td className="border border-gray-300 px-4 py-2" colSpan="5">Data is not avalible.</td>
        </tr>
      </tbody>
    </table>
  );
};