import Link from "next/link";
import React from "react";
import Image from "next/image";

const CountryCard = ({ country }) => {
  return (
    <div className="flex items-end gap-4 m-4">
  <Image
    src={`/${country.countryName}.png`}
    width={500}
    height={64}
    alt=""
    className="size-36 rounded-full object-cover bg-slate-200 p-4"
  />

  <div>
    <h3 className="text-lg/tight font-medium text-gray-900">{country.countryName}</h3>

    <div className="grid grid-cols-4 gap-x-4 mt-0.5 text-gray-700 ">
        <Link
          href={
            ["Greece", "Iraq", "Morocco", "Poland", "Sweden"].includes(
              country?.countryName
            )
              ? `https://www.returnmigration.eu/countries_${country?.countryName.toLowerCase()}`
              : `https://www.returnmigration.eu/countries-${country?.countryName.toLowerCase()}`
          }
          target="_blank"
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Country Profile On GAPs
          </button>
        </Link>
        <Link
          href={`/return-policy-timeline/${country?.countryName}`}
          target="_blank"
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Return Policy Timeline
          </button>
        </Link>
        <Link
          target="_blank"
          href={`/return-flow-chart/${country?.countryName}`}
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Return Flow Chart
          </button>
        </Link>
        <Link
          target="_blank"
          href={`/actor-return-diagram/${country?.countryName}`}
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Actor Return Diagram
          </button>
        </Link>
        <Link
          target="_blank"
          href={`/actor-return-diagram/${country?.countryName}`}
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Actor Return Diagram
          </button>
        </Link>
        <Link
          target="_blank"
          href={`/actor-return-diagram/${country?.countryName}`}
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Actor Return Diagram
          </button>
        </Link>
        <Link
          target="_blank"
          href={`/actor-return-diagram/${country?.countryName}`}
          className="group relative block overflow-hidden"
        >
          <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
            Actor Return Diagram
          </button>
        </Link>
    </div>
  </div>
</div>

    // <div className="country-card">
    //   <Image
    //     src={`/${country.countryName}.png`}
    //     alt={country.countryName}
    //     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    //     width={500}
    //     height={64}
    //   />

    //   <div className="relative border border-gray-100 bg-white p-6">
    //     <h2 className="text-2xl font-bold text-center">
    //       {country.countryName}
    //     </h2>

    //     <Link
    //       href={
    //         ["Greece", "Iraq", "Morocco", "Poland", "Sweden"].includes(
    //           country?.countryName
    //         )
    //           ? `https://www.returnmigration.eu/countries_${country?.countryName.toLowerCase()}`
    //           : `https://www.returnmigration.eu/countries-${country?.countryName.toLowerCase()}`
    //       }
    //       target="_blank"
    //       className="group relative block overflow-hidden"
    //     >
    //       <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
    //         Country Profile On GAPs
    //       </button>
    //     </Link>
    //     <Link
    //       href={`/return-policy-timeline/${country?.countryName}`}
    //       target="_blank"
    //       className="group relative block overflow-hidden"
    //     >
    //       <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
    //         Return Policy Timeline
    //       </button>
    //     </Link>
    //     <Link
    //       target="_blank"
    //       href={`/return-flow-chart/${country?.countryName}`}
    //       className="group relative block overflow-hidden"
    //     >
    //       <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
    //         Return Flow Chart
    //       </button>
    //     </Link>
    //     <Link
    //       target="_blank"
    //       href={`/actor-return-diagram/${country?.countryName}`}
    //       className="group relative block overflow-hidden"
    //     >
    //       <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
    //         Actor Return Diagram
    //       </button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default CountryCard;
