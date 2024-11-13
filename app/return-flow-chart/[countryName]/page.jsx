import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.countryName} Return Flow Chart
      </h1>

      <PDFViewer filename={`${params.countryName}_rfcl`} />
    </div>
  );
};

export default page;
