import TabNavigation from "@/app/_components/_atoms/TabNavigation";
import ChartComponent from "../../_components/ChartComponent";
import { getCountryList, getPushBacks } from "../../_utils/GlobalApi";
import Link from "next/link";

const page = async () => {
  const pushbacks = await getPushBacks();
  const countries = await getCountryList();
  const tabs = [
    { label: 'Note on Entry Refusals', content: <div className="max-w-6xl text-sm text-justify">
      <div className="my-2">
      The statistics contains number of refusals during entries to a country (of those not having valid visa or residence permit or having entry ban) at the border crossing points. This data can be counted by refusals at each crossing point (by land, sea or airport refusals).  
      </div>
      <div className="my-2">
      •	<span className="font-bold">For EU:</span> Third-country nationals formally refused permission to enter the territory of a Member State (see Art. 2.1 (q) and 5.1(a) of the <Link className="text-primary" href={'http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0862'} target="_blank"> Council Regulation (EC) no 862/2007</Link>). The external border is defined in the Schengen Borders Code (<Link href={'http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32006R0562'} target="_blank" className="text-primary"></Link>Council Regulation (EC) No 562/2006, more details on Article 2.2). 
      </div>
      <div className="my-2">
      •	<span className="font-bold">For countries not in the Schengen area:</span> The external border is the same as the international border. The grounds for refusal refer to Annex V part B of the Schengen Border Code, which is an administrative document in use in most of the Member States.
      </div>
      <div className="my-4 text-xs">
      * Third Country Nationals (TCN) refers to a person who does not have the nationality of one of the EU member states, nor the nationality of one of the countries associated with the EU (Iceland, Liechtenstein, Norway and Switzerland). For the non-EU countries, TCNs corresponds to &quot;foreign nationals&quot; subject to the removal. 
      </div>
    </div> },
    
    { label: null, content: null },
    { label: null, content: null },
  ];
  return (
    <div className="w-full mx-6">
      <div className="my-2">This section contains statistical data on TCNs/foreign nationals refused entry at the border.</div>
      
      <ChartComponent countries={countries} data={pushbacks} title="Entry Refusals" />
      <TabNavigation tabs={tabs} />
    </div>
  );
};

export default page;
