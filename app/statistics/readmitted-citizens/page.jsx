import ChartComponent from "../../_components/ChartComponent";
// import { getReadmittedCitizens } from "../../_utils/GlobalApi";

const page = async () => {
  // const readmittedCitizens = await getReadmittedCitizens();
  return (
    <div className="w-full mx-6">
      Readmitted Citizens will be ready.
      {/* <ChartComponent data={readmittedCitizens} /> */}
    </div>
  );
};

export default page;
