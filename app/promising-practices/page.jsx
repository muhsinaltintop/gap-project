import React from "react";
import PosterCard from "../_components/PosterCard";
import pormisingPractices from "../../public/_mocks_/promising-practices.json";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-primary">
          Promising Practices
        </h1>
      </div>
      <div className="grid grid-cols-1 mb-8 gap-6 text-justify">
        Good or promising practices in return governance are thus defined here
        as context-specific policies, programmes, interventions, or projects
        that have demonstrably improved outcomes for migrants and
        stakeholders—such as better rights protection, procedural fairness,
        reintegration prospects or access to legal pathways—while aligning with
        agreed normative standards. These practices may be temporary or
        permanent in nature, but must be sufficiently documented to allow
        learning, adaptation and potential upscaling in other settings. Policy
        transfer and upscaling are therefore treated as key analytical
        dimensions in assessing the promise of identified practices.
      </div>
      <div className="grid grid-cols-1 gap-6 md-8 sm:grid-cols-2 lg:grid-cols-3">
              {pormisingPractices.map((poster) => (
                <Link key={poster.id} href={`/promising-practices/${poster.country}`}>
                  <div className="border">
                    <Image src={poster.imageUrl} width="360" height="480" alt={`Promising Practices for ${poster.country}`} />
                  </div>
                </Link>
              ))}
            </div>
    </div>
  );
};

export default page;
