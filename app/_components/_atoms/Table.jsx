import React, { useRef } from "react";
import Link from "next/link";
import { CircleHelp, ExternalLink } from "lucide-react";
import Button from "./Button";
import { Tooltip } from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logoWatermark from "@/public/logoWatermark";
import GSDidotRegular from "../../../public/fonts/GFSDidot-Regular.jsx";

const Table = ({ policies, headers }) => {
  const tableRef = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm");
    doc.addFileToVFS("GFSDidot-Regular.jsx", GSDidotRegular);
    doc.addFont("GFSDidot-Regular.jsx", "GSDidotRegular", "normal");
    doc.setFont("GSDidotRegular");

    // Define the columns for the PDF table
    const columns = headers.map((header) => ({
      header: header.label,
      dataKey: header.dataKey, // Assuming you have a dataKey for each header
    }));

    // Prepare rows data
    const rows = policies.map((policy) => [
      policy.country,
      policy.policyName,
      policy.originalPolicyName,
      `${policy.day}/${policy.month}/${policy.year}`,
      policy.typeOfLegislation,
      policy.levelOfLegislation,
      formatPolicyTypeArea(policy.policyTypeArea),
      policy.policyDescription,
      policy.notes,
    ]);

    // AutoTable options
    const options = {
      startY: 20,
      margin: { top: 10 },
      styles: { overflow: "linebreak", fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] },
      columnStyles: {
        0: { fontStyle: "normal", columnWidth: 15 },
        1: { fontStyle: "normal", columnWidth: 20 },
        2: { fontStyle: "normal", columnWidth: 20 },
        3: { fontStyle: "normal", columnWidth: 20 },
        4: { fontStyle: "normal", columnWidth: 20 },
        5: { fontStyle: "normal", columnWidth: 20 },
        6: { fontStyle: "normal", columnWidth: 20 },
        7: { fontStyle: "normal", columnWidth: 20 },
        8: { fontStyle: "normal", columnWidth: 20 },
      },
    };

    // Add watermark function
    const addWatermark = (doc, imgData) => {
      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.addImage(imgData, "PNG", 50, 80, 125, 50, undefined, "NONE", {
          angle: 45,
          align: "center",
        }); // Adjust the position and size as needed
      }
    };

    // Add content using autoTable plugin
    autoTable(doc, {
      head: [columns.map((col) => col.header)],
      body: rows,
      ...options,
    });

    addWatermark(doc, logoWatermark);

    // Save the PDF
    doc.save("GAPs_Policy_Legislation.pdf");
  };

  // Helper function to format policy type area
  const formatPolicyTypeArea = (policyTypeArea) => {
    let formatted = "";
    if (policyTypeArea.asistedReturn) formatted += "Asisted Return, ";
    if (policyTypeArea.borderManagement) formatted += "Border Management, ";
    if (policyTypeArea.coercedEnforcedReturn)
      formatted += "Coerced Enforced Return, ";
    if (policyTypeArea.generalAsylum) formatted += "General Asylum, ";
    if (policyTypeArea.irregularity) formatted += "Irregularity, ";
    if (policyTypeArea.massExpulsion) formatted += "Mass Expulsion, ";
    if (policyTypeArea.preRemovalDetention)
      formatted += "Pre-Removal Detention, ";
    if (policyTypeArea.pushback) formatted += "Pushback, ";
    if (policyTypeArea.residence) formatted += "Residence, ";
    if (policyTypeArea.voluntaryReturn) formatted += "Voluntary Return, ";
    if (policyTypeArea.other) formatted += "Other, ";
    return formatted.trim().replace(/,$/, ""); // Remove trailing comma
  };

  return policies.length === 0 ? (
    "Please select a Country, Start Year, End Year or enter a policy term or simply click the Search button to list all the policies."
  ) : (
    <div className="overflow-x-auto">
      <div className="mb-2 flex justify-end">
        <Button
          label={"Download PDF"}
          onClick={downloadPDF}
          customCSS={"bg-primary text-white"}
          icon={true}
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table
          ref={tableRef}
          className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm"
        >
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 bg-secondary text-left"
                >
                  <span className="flex items-center">
                    {header.label.split(" ").slice(0, -1).join(" ")}
                    <br />
                    {header.label.split(" ").slice(-1)}{" "}
                    <Tooltip key={index} title={header.description}>
                      <CircleHelp className="size-3" color="#0d7dff" />
                    </Tooltip>
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {policies.map((policy, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                  {policy.country}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  <span className="flex items-center">
                    {policy.policyName}
                    {policy?.urlEnglish ? (
                      <Link
                        className="ml-2"
                        href={`${policy.urlEnglish}`}
                        target="_blank"
                      >
                        <ExternalLink className="size-3" color="#0d7dff" />
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  <span className="flex items-center">
                    {policy.originalPolicyName}
                    {policy?.originalUrl ? (
                      <Link
                        className="ml-2"
                        href={`${policy.originalUrl}`}
                        target="_blank"
                      >
                        <ExternalLink className="size-3" color="#0d7dff" />
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {`${policy.day}/${policy.month}/${policy.year}`}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.typeOfLegislation}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.levelOfLegislation}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {formatPolicyTypeArea(policy.policyTypeArea)}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words w-lg">
                  {policy.policyDescription}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
