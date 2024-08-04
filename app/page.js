import Link from "next/link";
import PlainText from "./_components/_atoms/PlainText";
import LinkToGap from "./_components/LinkToGap";
import Map from "./_components/Map";

const mainText = (
  <>
    <p>
    GAPs Data Repository offers an overview of available qualitative and quantitative data on
national return regimes. Designed to be open access and user-friendly, the Data Repository
collects all relevant quantitative, qualitative, and visual data into five main categories, ensuring a
unified and organized presentation for beneficiaries:
    </p>
    <ul className="mt-4 mb-4 text-xl">
      <li className="float-left mr-8">
        <Link className="font-bold text-primary" href={"/country-list"}>
        Profile
        </Link>
      </li>
      <li className="float-left mr-8">
        <Link className="font-bold text-primary" href={"/policy-legislation-map"}>
        Legislation
        </Link>
      </li>
      <li className="float-left mr-8">
        <Link className="font-bold text-primary" href={"/return-infrastructure"}>
        Infrastructure
        </Link>
      </li>
      <li className="float-left mr-8">
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
    Each category, particularly statistics, includes several sub-categories. These categories are identified by consulting the literature review, existing datasets on migration, and insights from expertise/empirical data collection of  <Link href={"/country-list"} target="_blank" className="text-primary"> 14 countries </Link>.  The categories and sub-categories are chosen according to their relevance in understanding the return and readmission policies and practices, data accessibility, reliability, clarity as well as comparability.
    </p>
    <p>
    The Data Repository was launched in 2024 and has been conducted under the Horizon Europe project ‘GAPS: De-centring the Study of Migrant Returns and Readmission Policies in Europe and Beyond’ (101094341). Data collection is carried out by national experts of the <Link href={"https://www.returnmigration.eu/team"} target="_blank" className="text-primary">GAPs Project consortium</Link>, entries are realized through REDCap Software ensuring a secure web connection with authentication and data logging as well as enabling systematic organisation, storage, and retrieval of data. The sole responsibility for the data provided lies with the national experts who provided the data and the original data sources (primary or secondary) referenced by these experts in each category.
    </p>
    <p>
    To learn more about the types of data, selection criteria, scope, coverage, data quality and assurance, archiving and presentation, roles and responsibilities in data curation, and the technical data dictionary codebook, please see the full report: <Link href={"https://zenodo.org/records/10790795"} target="_blank" className="text-primary"> D1.2 GAPs Data Repository on return: Guideline, data samples and codebook</Link>. 
    </p>
    <p className="mt-2 text-sm">
    GAPs Data Repository is a living platform, please
      <span className="text-primary"><Link href={"https://www.returnmigration.eu/contact-gaps"} target="_blank"> contact</Link></span> the Horizon Europe project GAPs
      coordinators to contribute data entries and/or for any queries.
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
