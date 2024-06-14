"use client";
import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Button from "./Button";

// import DownloadExcel from "./DownloadExcel";

const Table = ({ policies, headers }) => {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "GAPs Policy Lagislation",
    sheet: "Countries",
  });
  {
    console.log("ref", tableRef);
  }

  return policies.length === 0 ? (
    "Plase select a Country, Start Year, End Year or enter a policy term or simply click the Search button to list all the policies..."
  ) : (
    <div className="overflow-x-auto">
      <div className="w-full overflow-x-auto ">
        <table
          ref={tableRef}
          className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm"
        >
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="whitespace-nowrap px-4 py-2 font-bold text-gray-900"
              >
                {header.label}
              </th>
            ))}
          </tr>

          <tbody className="divide-y divide-gray-200">
            {policies.map((policy, index) => (
              <tr key={`${index}`}>
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
                  {policy.day}/{policy.month}/{policy.year}
                </td>
                <td className="whitespace-normal text-justify px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.policyDescription}
                </td>

                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.typeOfLegislation}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.levelOfLegislation}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.policyTypeArea.asistedReturn
                    ? "Asisted Return, "
                    : ""}
                  {policy.policyTypeArea.borderManagement
                    ? "Border Management, "
                    : ""}
                  {policy.policyTypeArea.coercedEnforcedReturn
                    ? "Coerced Enforced Return, "
                    : ""}
                  {policy.policyTypeArea.generalAsylum
                    ? "General Asylum, "
                    : ""}
                  {policy.policyTypeArea.irregularity ? "Irregularity, " : ""}
                  {policy.policyTypeArea.massExpulsion
                    ? "Mass Expulsion, "
                    : ""}
                  {policy.policyTypeArea.preRemovalDetention
                    ? "Pre-Removal Detention, "
                    : ""}
                  {policy.policyTypeArea.pushback ? "Pushback, " : ""}
                  {policy.policyTypeArea.residence ? "Residence, " : ""}
                  {policy.policyTypeArea.voluntaryReturn
                    ? "Voluntary Return, "
                    : ""}
                  {policy.policyTypeArea.other ? "Other, " : ""}
                </td>
                <td className="whitespace-normal text-justify px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button label={"Download as Excel"} onClick={onDownload} icon={false} />
      </div>
    </div>
  );
};

export default Table;
