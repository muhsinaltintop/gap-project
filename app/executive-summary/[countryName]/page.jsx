import React from "react";
import PlainText from "@/app/_components/_atoms/PlainText";
import countryProfileData from "../../../public/_mocks_/countryProfile";

const page = ({ params }) => {
  const country = countryProfileData?.find(
    (country) => country?.countryName === params.countryName
  );

  return (
    <div className="w-9/12 m-10">
        <h1 className="text-xl font-bold">
        {params.countryName} Executive Summary
      </h1>
      {console.log(countryProfileData)}
      <div className="w-9/12 align-justify text-justify ">
        <PlainText text={country?.executiveSummary}></PlainText>
      </div>
    </div>
  );
};

export default page;
