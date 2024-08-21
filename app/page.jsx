import Link from "next/link";
import PlainText from "./_components/_atoms/PlainText";
import LinkToGap from "./_components/LinkToGap";
import Map from "./_components/Map";

const mainText = (
  <>
    <p>
    GAPs Data Repository offers an overview of available qualitative and quantitative data on
  national return regimes. It is launched in 2024 as an output of the Horizon Europe project
  ‘GAPS: De-centring the Study of Migrant Returns and Readmission Policies in Europe and
  Beyond’ (101094341).
    </p>
    <p>
    Designed to be open access and user-friendly, the Data Repository collects all relevant
quantitative, qualitative, and visual data into five main categories, ensuring a unified and
organized presentation for those interested in return related data:
    </p>
    <ul className="mt-2 mb-2 ml-4">
      <li className="mr-8">
        <Link className="font-bold text-primary" href={"/country-list"}>
        Profile
        </Link>
      </li>
      <li className="mr-8">
        <Link className="font-bold text-primary" href={"/policy-legislation-map"}>
        Legislation
        </Link>
      </li>
      <li className="mr-8">
        <Link className="font-bold text-primary" href={"/return-infrastructure"}>
        Infrastructure
        </Link>
      </li>
      <li className="mr-8">
        <Link className="font-bold text-primary" href={"/international-cooperation"}>
        International Cooperation
        </Link>
      </li>
      <li>
        <Link className="font-bold text-primary" href={"/statistics"}>
        Descriptive Statistics
        </Link>
      </li>
    </ul>
    <p>
    Each category, especially statistics, comprises multiple sub-categories. These categories have
    been determined by referring to the literature review, existing migration datasets, and insights
    from empirical data collected from  <Link href={"/country-list"} target="_blank" className="text-primary"> 14 countries</Link>.  The selection of categories and sub-categories is based on their relevance to understanding return and readmission policies and practices, as well as considerations of data accessibility, reliability, clarity, and comparability.
    </p>
    <p>
    Data collection in 2023 and 2024 is carried out by national experts of the <Link href={"https://www.returnmigration.eu/team"} target="_blank" className="text-primary">GAPs Project consortium</Link>, entries are realized through REDCap Software ensuring a secure web connection with authentication and data logging as well as enabling systematic organisation, storage, and retrieval of data. The accuracy of the data is based on the national experts and the quality of original data sources consulted during the data collection phase.
    </p>
    <p>
    To learn more about the types of data, selection criteria, scope, coverage, data quality and assurance, archiving and presentation, roles and responsibilities in data curation, and the technical data dictionary codebook, please see the full report: <Link href={"https://zenodo.org/records/10790795"} target="_blank" className="text-primary"> D1.2 GAPs Data Repository on return: Guideline, data samples and codebook</Link>. 
    </p>
    <p>
    GAPs Data Repository is a living platform, please
      <span className="text-primary"><Link href={"https://www.returnmigration.eu/contact-gaps"} target="_blank"> contact</Link></span> the Horizon Europe project GAPs coordinators to contribute data entries or for any queries and comments.
    </p>
    <p className="text-sm mt-2">*Last Updated on 03.08.2024</p>
  </>
);

export default function Home() {
  return (
    <div className="w-full text-justify">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-6 lg:gap-8">
        <div className="justify-around mx-6 mt-6 lg:col-span-4">
          <PlainText text={mainText} />
        </div>
        
        <div className="mx-6 mt-6 col-span-2">
          <LinkToGap />
        </div>
      </div>
      <div className="mx-6 mt-6 h-100 rounded-lg">
        <Map />
      </div>
    </div>
  );
}
