"use client";
import SelectCountryComponent from "@/app/_components/_returnByCountry/SelectCountryComponent";
import { useEffect, useState } from "react";
import rbtCountries from "../../_components/_returnByCountry/returnByTypeCountries.json";
import { getAllRbtData } from "../../_utils/GlobalApi"; // GlobalApi'deki fonksiyon
import Link from "next/link";
import TabNavigation from "@/app/_components/_atoms/TabNavigation";
import { Tooltip as MuiTooltip } from '@mui/material';
import originalData from "../../../public/_mocks_/originalData.json"
import { CircleHelp } from "lucide-react";

const DataTable = ({ mergedData }) => {
  
  return (
    <table className="table-auto border-collapse w-full mt-4 shadow-lg">

      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Voluntary Return</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Enforced Return</th>
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Assisted Return</th>
          {mergedData[0].spontaneousReturn !== "n/a" ?  <th className="border border-gray-300 px-4 py-2 font-bold text-left">Spontaneous Return</th> : ""}
          <th className="border border-gray-300 px-4 py-2 font-bold text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        {mergedData.map((row, index) => (
                   
          <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="border border-gray-300 px-4 py-2">{row.year}</td>
            <td className="border border-gray-300 px-4 py-2">{row.voluntaryReturn ===  0 | row.voluntaryReturn === undefined | row.voluntaryReturn === "n/a" ? <div className="text-gray-400">n/a</div> : row.voluntaryReturn}</td>
            <td className="border border-gray-300 px-4 py-2">{row.enforcedReturn ===  0 | row.enforcedReturn === undefined | row.enforcedReturn === "n/a" ? <div className="text-gray-400">n/a</div> : row.enforcedReturn}</td>
            <td className="border border-gray-300 px-4 py-2">{row.assistedReturn ===  0 | row.assistedReturn === undefined | row.assistedReturn === "n/a" ? <div className="text-gray-400">n/a</div> : row.assistedReturn}</td>
            {row.spontaneousReturn !== "n/a" ? <td className="border border-gray-300 px-4 py-2">{row.spontaneousReturn ===  0 | row.spontaneousReturn === undefined | row.spontaneousReturn === "n/a" ? <div className="text-gray-400">n/a</div> : row.spontaneousReturn}</td> : ""}
            
            <td className="border border-gray-300 px-4 py-2">{row.totalReturn ===  0 | row.totalReturn === undefined | row.totalReturn === "n/a" ? <div className="text-gray-400">n/a</div> : row.totalReturn}</td>
          </tr>
        ))}
        <tr className="bg-gray-200">
          <td className="border border-gray-300 px-4 py-2 font-bold">Source</td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlVoluntaryReturn != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlVoluntaryReturn} target="_blank" className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceVoluntaryReturn}
              </Link>
            ) : (
              <div className="text-gray-400">n/a</div>
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlEnforcedReturn != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlEnforcedReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceEnforcedReturn}
              </Link>
            ) : (
              <div className="text-gray-400">n/a</div>
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlAssistedReturn != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlAssistedReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceAssistedReturn}
              </Link>
            ) : (
              <div className="text-gray-400">n/a</div>
            )}
          </td>
          {console.log("mD:", mergedData[0])}
          {/* <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlSpontaneousReturn !== "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlSpontaneousReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceSpontaneousReturn}
              </Link>
            ) : (
              <div className="text-gray-400">n/a</div>
            )}
          </td> */}
          <td className="border border-gray-300 px-4 py-2">
            {mergedData[0]?.urlTotalReturn != "n/a" || undefined ? (
              <Link href={mergedData[0]?.urlTotalReturn} className="text-blue-500 hover:underline">
                {mergedData[0]?.sourceTotalReturn}
              </Link>
            ) : (
              <div className="text-gray-400">n/a</div>
            )}
          </td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2 font-bold">Notes:</td>
          <td className="border border-gray-300 px-4 py-2" colSpan="5">
            { mergedData[0]?.additionalNote === "n/a" ? <div className="text-gray-400">n/a</div> : mergedData[0]?.additionalNote === "" ? <div className="text-gray-400">n/a</div> : <div>{mergedData[0]?.additionalNote}</div>
            }
            
            </td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2 font-bold">*n/a</td>
        <td className="border border-gray-300 px-4 py-2 text-sm" colSpan="5">Data is not avalible.</td>
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

  const source = originalData.find(entry => entry.title == "Returns by Type")

  const handleCountryChange = (countryCode) => {
    setCountryCode(countryCode);
    setError(null);
  };

  const tabs = [
    { label: 'Note on Voluntary Return(Voluntary Departure)', content: <div className="max-w-6xl text-sm text-justify">

      <div className="my-2">Voluntary Return refers to the situation in which the third-country national (TCN) has voluntarily complied with the obligation to return (i.e. no enforcement procedure had to be launched) and this departure is confirmed, for example, by information received from the border authority or consular authorities in the country of origin or other authorities such as IOM or any other organizations implementing a program to assist migrants to return to a third country (definition based on Art 3.8 <Link href={'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:348:0098:0107:EN:PDF'} target="_blank" className="text-primary">Directive 115/2008/EC</Link>).</div>
      </div> },
    { label: 'Enforced Return (Removal) ', content: <div className="max-w-6xl text-sm text-justify">
      <div className="my-2">
      Enforced return (removal) refers to the situation in which TCN is subject to the enforcement of the obligation to return (the enforcement procedure has been launched) (definition based on Art 3.5 and 3.8 <Link href={'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:348:0098:0107:EN:PDF'} target="_blank" className="text-primary">Directive 115/2008/EC</Link>).
      </div>
        <div className="my-2">
          <span className="font-bold">Note:</span> GAPS consortium uses the term of coerced returns to refer enforced returns.
        </div>
      </div> },
    
    { label: "Assisted Return", content: 
      <div className="max-w-6xl text-sm text-justify">

      <div className="my-2">Assisted Return refers to the situation in which TCN was assisted to return by logistical, financial and/or other material assistance. He/she is the beneficiary of a national or EU MS cooperative program to encourage return and to provide reintegration assistance. The TCN received an <span className="font-bold">(i)</span> in-kind assistance prior to departure (e.g. purchase of plane tickets) and/or <span className="font-bold">(ii)</span> in-cash allowances at the point of departure/upon arrival and/or <span className="font-bold">(iii)</span> in-kind or in-cash reintegration assistance.</div>
      <div className="my-2">
        <span className="underline">Please note</span> that beneficiaries of assisted return programs are mostly TCN who voluntarily return but some may also have been returned by force Definition based on Art 3.8 <Link href={'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:348:0098:0107:EN:PDF'} target="_blank" className="text-primary">Directive 115/2008/EC</Link> and <Link href={'http://bookshop.europa.eu/en/asylum-and-migration-glossary-2.0-pbDR3212081/ nnn0000'} target="_blank" className="text-primary">Asylum and Migration Glossary 2.0</Link>.
      </div>
      </div>
      },
      { label: "Total", content: <div className="max-w-6xl text-sm text-justify">
        <div className="my-2">Total number <span className="underline">may be larger than the sum of three categories</span> may be larger than the sum of three categories because of Other concluded return which refers to the situation in which one can reasonably presume that the third country national was returned based on some assumptions (some information are missing and the departure is not confirmed by the information from the border authority).</div>
        
      </div> },
  ];

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const mergedData = await getAllRbtData(countryCode); // Tüm verileri çekiyoruz
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
      <div className="my-2 max-w-6xl">
      This section contains statistics on TCNs/foreign nationals returned following an order to leave, by type of return: 
        <ul className="list-item list-disc">
          <li>
            Voluntary Return (voluntary departure)
          </li>
          <li>
            Enforced return (removal) 
          </li>
          <li>
           Assisted Return
          </li>
          <li>
            Total
          </li>
        </ul>
</div>

        <SelectCountryComponent country={countryCode} onCountryChange={handleCountryChange} countries={rbtCountries} />
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data</p>}
        {countryCode && !loading && !error && (
          <div>
            {data.length > 0 ? <DataTable mergedData={data} /> : <p>No data available</p>}
            <div className="mt-4">
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
            <div className="mt-2 mb-4 w-96">
                {source?.title === "Returns by Type" && countryCode === "germany"  ? (<div className="font-bold border border-primary-light rounded-xl bg-primary-light p-4">
                    Germany data includes multiple and/or conflicting numbers from different sources. To see alternative data, <Link href="/excel/rbt/rbt-alternative-germany.xlsx" className="text-primary">please click to download the data file.
                </Link>
              </div> 
              ) : source?.title === "Returns by Type" && countryCode === "poland"  ? ( <div className="font-bold border border-primary-light rounded-xl bg-primary-light p-4">
                Poland data includes multiple and/or conflicting numbers from different sources. To see alternative data, <Link href="/excel/rbt/rbt-alternative-poland.xlsx" className="text-primary">please click to download the data file.
              </Link>
            </div> ) : source?.title === "Returns by Type" && countryCode === "greece"  ? ( 
              <div className="font-bold border border-primary-light rounded-xl bg-primary-light p-4">
              Greece data includes multiple and/or conflicting numbers from different sources. To see alternative data, <Link href="/excel/rbt/rbt-alternative-greece.xlsm" className="text-primary">please click to download the data file.
            </Link>
          </div>
              ) : source?.title === "Returns by Type" && countryCode === "netherlands"  ? ( <div className="font-bold border border-primary-light rounded-xl bg-primary-light p-4">
                Netherlands data includes multiple and/or conflicting numbers from different sources. To see alternative data, <Link href="/excel/rbt/rbt-alternative-netherlands.xlsx" className="text-primary">please click to download the data file.
              </Link>
            </div>) : source?.title === "Returns by Type" && countryCode === "turkey"  ? ( 
              <div className="font-bold border border-primary-light rounded-xl bg-primary-light p-4">
              Türkiye data includes multiple and/or conflicting numbers from different sources. To see alternative data, <Link href="/excel/rbt/rbt-alternative-turkey.xlsx" className="text-primary">please click to download the data file.
            </Link>
          </div>
              ): ""}
                </div>
            
            <TabNavigation tabs={tabs}/>
            </div>
            <div className="text-sm">
              <div className="my-2"><span className="font-bold">Note:</span> GAPs consortium does NOT agree with some definition used in Eurostat and national sources, particularly the definition of &quot;voluntary return&quot; (because there is an obligation to return), but we use the term to avoid possible confusions with data drawn from data sources (Eurostat and national statistics). GAPs will use its own conceptualization for other WPs but not for the development of data repository</div>

              <div className="my-2 font-bold">Spontaneous Returns of Refugees:</div>


              <div className="my-2">
                This category refers to the number of people who are recorded as having left the country without receiving any support and assistance from the national authorities. This is often the case for refugees or those under temporary protection status. 
              </div>
              <div className="my-2">
                If a country in the dataset has a number of spontaneous returns, the data is given in a separate table below.
              </div>
            </div>
            </div>

        )}
    </div>
  );
};

export default Page;
