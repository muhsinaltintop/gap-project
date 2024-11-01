import TabNavigation from "@/app/_components/_atoms/TabNavigation";
import ChartComponent from "../../_components/ChartComponent";
import { getAsylumApplications, getCountryList, getTps } from "../../_utils/GlobalApi";
import PageTitle from "@/app/_components/_atoms/PageTitle";


const page = async () => {
  const asylumApplications = await getAsylumApplications();
  const tps = await getTps();
  const countries = await getCountryList();

  const tabs = [
    { label: 'Note on Asylum Application', content: <div className="max-w-6xl text-sm text-justify">

      <div className="my-2">This section contains statistical data on the number of persons having applied for international protection or having been included in such application as a family member during the reference period.</div>
      <div className="my-2">Specific groups under the Temporary Protection Status (TPS) are also included in this section.  Any specific groups under TPS not included in the official asylum seeker data (e.g. Ukrainians, Syrians) are shown in a separate table below.</div>
      </div> },
    { label: 'Note on Multiple Data:', content: <div className="max-w-6xl text-sm text-justify">
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
      <TabNavigation tabs={tabs} />
      <ChartComponent countries={countries} data={asylumApplications} title="Asylum Application" />
      <PageTitle title="Temprorary Protection Status"/>  
      <ChartComponent countries={countries} data={tps} title="Temprorary Protection Status"/>
    </div>
  );
};

export default page;
