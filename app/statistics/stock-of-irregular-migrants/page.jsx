import ChartComponent from "@/app/_components/ChartComponent";
import { getStockOfIrregularMigrants } from "../../_utils/GlobalApi";
import TabNavigation from "@/app/_components/_atoms/TabNavigation";

const page = async () => {
  const stockOfIrregularMigrants = await getStockOfIrregularMigrants();

  const tabs = [
    { label: 'Notes on Stock of Irregular Migrants', content: <div className="w-9/12 text-sm">

      <div className="my-2">Stock of Irregular Migrants data contains statistics mainly on the Third Country Nationals found to be illegally present in the country in question.</div>
      <div className="my-2">The primary source is the available Eurostat data. If there is no available data or any relevant category for those non-EU countries, the numbers refer to any available open national data which corresponds to number of &quot;foreign nationals&quot; subject to the removal. </div>
      <div className="my-2">
      The detailed explanation for the available data:
      </div>
      <div className="my-2">
      <ul>
        <li><div className="my-2">•	For the EU countries: The statistics officially refer to &quot;third country nationals found to be illegally present&quot;. Third country nationals who are detected by Member States&apos; authorities and have been determined to be illegally present under national laws relating to immigration (see Art. 2.1 (r) and 5.1(b) of the Council Regulation (EC) no 862/2007). This category relates to persons who have been found to have entered illegally (for example by avoiding immigration controls or by employing a fraudulent document) and those who may have entered legitimately but have subsequently remained on an illegal basis (for example by overstaying their permission to remain or by taking unauthorized employment).</div>
        <div className="my-2">According to the Eurostat data description, only persons who are apprehended or otherwise come to the attention of national immigration authorities are recorded in these statistics. These are not intended to be a measure of the total number of persons who are present in the country on an unauthorised basis.</div></li>
        <li><div className="my-2">•	For countries not in the Schengen area: The numbers may be officially referred as irregular migrants, illegal migrants or apprehended migrants. The exact numbers or the proxies about stock of irregular migrants can be accessed through monthly/annual formal reports/statistics about migrants who are apprehended or come to the attention of national immigration authorities. The numbers are also found (during press releases or speeches) in the web sources of relevant directorates and ministries or border enforcement.</div>
        <div className="my-2">Please check the raw data for the exact source. </div>
        </li>
      </ul>
      </div>
      <div className="my-2">

      </div>
      </div> },
    { label: 'Note on Multiple Data:', content: <div className="w-9/12 text-sm">
      <div className="my-2">
      Data repository combines data from multiple sources in terms of level of sources (e.g. national or European) and source of the data (official data/census, report, input of administrative documents in different levels, media outlets etc.). 
      </div>
      <div className="my-2">In case of existing multiple and/or conflicting data collected from different sources, you will see below an extra table showing the data that differs from the primary data added to the first table.</div>
    </div> },
    
    { label: null, content: <div>Archive Content</div> },
    { label: null, content: <div>Notifications Content</div> },
  ];
  return (
    <div className="w-full mx-6">
      <TabNavigation tabs={tabs} defaultTab="Messages" />
      <ChartComponent data={stockOfIrregularMigrants} title="Stock of Irregular Migrants" />
    </div>
  );
};

export default page;
