import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.countryName} Return Policy Timeline
      </h1>

      <PDFViewer filename={`${params.countryName}_rptl`} />
    </div>
  );
};

export default page;
