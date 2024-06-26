import PlainText from "./_components/_atoms/PlainText";
import LinkToGap from "./_components/LinkToGap";
import Map from "./_components/Map";

const mainText =
  "The GAPs Data Repository provides an overview of available qualitative and quantitative data on national return regimes by structuring them into five main categories: profile, legislation, infrastructure, international cooperation and descriptive statistics. Each category, particularly statistics, includes several sub-categories. These categories are identified by consulting the literature review, existing datasets on migration, and insights from expertise/empirical data collection of 14 countries. The categories and sub-categories are chosen according to their relevance in understanding the return and readmission policies and practices, data accessibility, reliability, clarity as well as comparability. Data collection is carried out by national experts, entries are realized through REDCap Software ensuring a secure web connection with authentication and data logging. These enable systematic organisation, storage, and retrieval of data during and after the project. For viewing the entire data set or to contribute data entries please contact the coordinators of Horizon Europe project GAPs.";

export default function Home() {
  return (
    <div className="w-full text-justify">
      <div className="mx-6 mt-6 ">
        <PlainText text={mainText} />
      </div>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-8">
        <div className="mx-6 mt-6 h-100 rounded-lg lg:col-span-2">
          <Map />
        </div>
        <div className="mx-6 mt-6">
          <LinkToGap />
        </div>
      </div>
    </div>
  );
}
