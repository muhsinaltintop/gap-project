import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.countryName} Actor Diagram
      </h1>

      <PDFViewer filename={`${params.countryName}_ardl`} />
    </div>
  );
};

export default page;
