import PageTitle from "@/app/_components/_atoms/PageTitle";
import ChartComponent from "../../_components/ChartComponent";
import { getCountryList, getDublinReturns, getAlternativeDublinReturns } from "../../_utils/GlobalApi";

const page = async () => {
  const dublinReturns = await getDublinReturns();
  const alternativeDublinReturns = await getAlternativeDublinReturns();
  const countries = await getCountryList()

  // const tabs = [
  //   { label: 'Note on Dublin Returns', content: <div className="max-w-6xl text-sm text-justify">

  //           </div> },
  //   { label: null, content: null },
    
  //   { label: null, content: <div>Archive Content</div> },
  //   { label: null, content: <div>Notifications Content</div> },
  // ];

  return (
    <div className="w-full mx-6">
      <div className="my-2 max-w-6xl">This section contains number of third country nationals found to be illegally present who are subjected to the transferred from one Member State to another under the mechanism established by the Dublin Regulation (Council Regulation (EC) No 343/2003 and (EC) No 1560/2003).</div>

      <ChartComponent countries={countries} data={dublinReturns} title="Dublin Returns" />

      <PageTitle title="Alternative Dublin Returns"/>

      <ChartComponent countries={countries} data={alternativeDublinReturns} title="Alternative Dublin Returns" />

    </div>
  );
};

export default page;
