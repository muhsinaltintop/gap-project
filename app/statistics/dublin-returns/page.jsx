import TabNavigation from "@/app/_components/_atoms/TabNavigation";
import ChartComponent from "../../_components/ChartComponent";
import { getDublinReturns } from "../../_utils/GlobalApi";

const page = async () => {
  const dublinReturns = await getDublinReturns();

  const tabs = [
    { label: 'Note on Dublin Returns', content: <div className="max-w-6xl text-sm text-justify">

      <div className="my-2">This section contains number of third country nationals found to be illegally present who are subjected to the transferred from one Member State to another under the mechanism established by the Dublin Regulation (Council Regulation (EC) No 343/2003 and (EC) No 1560/2003).</div>
      </div> },
    { label: null, content: null },
    
    { label: null, content: <div>Archive Content</div> },
    { label: null, content: <div>Notifications Content</div> },
  ];

  return (
    <div className="w-full mx-6">
      <ChartComponent data={dublinReturns} title="Dublin Returns" />
      <TabNavigation tabs={tabs}/>
    </div>
  );
};

export default page;
