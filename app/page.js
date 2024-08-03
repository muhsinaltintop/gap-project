import Link from "next/link";
import PlainText from "./_components/_atoms/PlainText";
import LinkToGap from "./_components/LinkToGap";
import Map from "./_components/Map";

const mainText = (
  <>
  <p className="text-sm">*Last Updated on 03.08.2024</p>
    <p>
      The GAPs Data Repository provides an overview of available qualitative and
      quantitative data on national return regimes by structuring them into five
      main categories:
    </p>
    <ul className="mt-4 mb-4">
      <li>
        <Link className="font-bold text-primary" href={"/country-list"}>
        Profile
        </Link>
      </li>
      <li>
        <Link className="font-bold text-primary" href={"/policy-legislation-map"}>
        Legislation
        </Link>
      </li>
      <li>
        <Link className="font-bold text-primary" href={"/return-infrastructure"}>
        Infrastructure
        </Link>
      </li>
      <li>
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
      Each category, particularly statistics, includes several sub-categories.
      These categories are identified by consulting the literature review,
      existing datasets on migration, and insights from expertise/empirical data
      collection of 14 countries. The categories and sub-categories are chosen
      according to their relevance in understanding the return and readmission
      policies and practices, data accessibility, reliability, clarity as well
      as comparability.
    </p>
    <p>
      Data collection is carried out by national experts, entries are realized
      through REDCap Software ensuring a secure web connection with
      authentication and data logging. These enable systematic organisation,
      storage, and retrieval of data during and after the project.
    </p>
    <p className="mt-2 text-sm">
      For viewing the entire data set or to contribute data entries please 
      <span className="text-primary"><Link href={"https://www.returnmigration.eu/contact-gaps"} target="_blank"> contact</Link></span> the coordinators of Horizon Europe project GAPs.
    </p>
  </>
);

export default function Home() {
  return (
    <div className="w-full text-justify">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-5 lg:gap-8">
        <div className="justify-around mx-6 mt-6 lg:col-span-3">
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
