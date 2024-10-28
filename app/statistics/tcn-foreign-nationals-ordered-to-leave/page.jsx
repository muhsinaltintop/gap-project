"use client";

import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import tcnCountries from "../../_components/_returnByCountry/tcnCountries.json";
import { getAllTcnData } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import Link from "next/link";
import { Tooltip as MuiTooltip } from '@mui/material';
import TabNavigation from "@/app/_components/_atoms/TabNavigation";
import originalData from "../../../public/_mocks_/originalData.json"
import { CircleHelp } from "lucide-react";

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
            {mergedData[0]?.urlReturnDecisionsIrregular != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlReturnDecisionsIrregular} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnDecisionsIrregular}
              </Link>
            ) : (
              "n/a"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnFollowingOrder != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlReturnFollowingOrder} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnFollowingOrder}
              </Link>
            ) : (
              "n/a"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnNegativeAsylum != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlReturnNegativeAsylum} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnNegativeAsylum}
              </Link>
            ) : (
              "n/a"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlReturnedMinors != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlReturnedMinors} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceReturnedMinors}
              </Link>
            ) : (
              "n/a"
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlTotalOrderReturn != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlTotalOrderReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceTotalOrderReturn}
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

  const source = originalData.find(entry => entry.title ==="TCNs/Foreign Nationals Ordered to Leave")

  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null);
  };

  const tabs = [
    { label: 'Note on TCNs/Foreign Nationals* Ordered to Leave', content: <div className="max-w-6xl text-sm text-justify">

      <div className="my-2"><span className="font-bold">For EU countries:</span> Third country nationals found to be illegally present who are subject to an administrative or judicial decision or act stating that their stay is illegal and imposing an obligation to leave the territory of the Member State (see Art. 7.1 (a) of the <Link href={'https://ec.europa.eu/eurostat/cache/metadata/en/migr_eil_esms.htm'} target="_blank" className="text-primary">Regulation</Link>). </div>

      <div className="my-2">o	<span className="font-bold">Return decision/ order to leave/ order to expulsion:</span> An administrative or judicial decision or act, stating or declaring the stay of a TCN to be illegal and imposing or stating an obligation to return.</div>

      <div className="my-2"><span className="font-bold">For non-EU countries:</span> Foreigners found to be illegally present who are subject to decision ordering them to leave the territory of the X state.</div>

      <div className="my-4 text-xs">* Third Country Nationals (TCN) refers to a person who does not have the nationality of one of the EU member states, nor the nationality of one of the countries associated with the EU (Iceland, Liechtenstein, Norway and Switzerland). For the non-EU countries, TCNs corresponds to &quot;foreign nationals&quot; subject to the removal. </div>
      </div> },
    { label: "Note on Return Decisions Issued for IRREGULAR Migrants", content: 
      <div className="max-w-6xl text-sm text-justify">
    <div className="my-2">This category could be the case for EU or non-EU states. For the latter category, as many foreigners who would have sought asylum practically do not have access to asylum application or avoid it due to onward migration aims (e.g. Afghans in Turkey). When these migrants are apprehended during their entry, stay, working, or exiting, return/deportation/order to leave decision may be imposed on them. </div></div> },
    
    { label: "Note on Return Decisions Issues Upon NEGATIVE ASYLUM Applications", content: 
      <div className="max-w-6xl text-sm text-justify">
    <div className="my-2">Data may be published at the EU level and national level, see Eurostat.</div></div> },
    { label: "Note on TCNs/Foreign Nationals Returned FOLLOWING an Order to Leave", content: <div className="max-w-6xl text-sm text-justify">
    <div><span className="font-bold">For EU countries:</span> TCNs who have in fact left the territory of the Member State, following an administrative or judicial decision or act stating that their stay is illegal and imposing an obligation to leave the territory (see Art. 7.1 (b) of the <Link href={'http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0862'} target="_blank" className="text-primary"> Council Regulation (EC) no 862/2007</Link>).</div>
    <div className="my-2">
    <span className="font-bold">For non-EU countries:</span> Foreign nationals who left the country after issued a return/deportation/removal decision order or an entry ban. A removal decision shall be issued either upon instructions of the Migration authority of the country, or another administrative body (e.g. governorates) or administrative or others courts. If this is the case in which the data collector does not know whether returnees are issued or not a decision, the number of deportations/removals in general can be recorded.
    </div></div> },
    { label: "Note on Third Country Unaccompanied MINORS Returned Following an Order to Leave", content: <div className="max-w-6xl text-sm text-justify">
    <div><span className="font-bold">Minor</span> means a third-country national or stateless person under the age of 18 years. </div>
    <div className="my-2">
    The <span className="font-bold">return of a minor</span> who arrives on the territory of an EU Member unaccompanied by the adult responsible for them by law or by the practice of the EU Member State concerned, and for as long as they are not effectively taken into the care of such a person or  who is left unaccompanied after they have entered the territory of the EU Member State ().
    <Link href={'https://home-affairs.ec.europa.eu/networks/european-migration-network-emn/emn-asylum-and-migration-glossary/glossary/unaccompanied-minor_en'} target="_blank" className="text-primary">Directive 2011/95/EU</Link>).
    </div>
    </div> }
  ];

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const mergedData = await getAllTcnData(countryCode); // Tüm verileri çekiyoruz
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
      <div className="w-9/10 mx-6">
        <div className="my-2">
        This section contains five different, but related categories  indicated below: 
        </div>
        <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={tcnCountries} />
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data</p>}
        {countryCode && !loading && !error && (
          <div className="mb-4">
            {data.length > 0 ? <DataTable mergedData={data} /> : <p>No data available</p>}
          </div>
        )}
        
        {data.length > 0 ? (
          <div>
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


          <TabNavigation tabs={tabs} />
          </div>
          
          ) : ""}
        
        

      </div>
  );
};

export default Page;
