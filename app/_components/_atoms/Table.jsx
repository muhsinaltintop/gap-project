import React, { useRef } from "react";
import Link from "next/link";
import { CircleHelp, ExternalLink } from "lucide-react";
import { Tooltip } from "@mui/material";
import PdfDownloader from "./PdfDownloader";

const Table = ({ policies, headers, pathName }) => {
  const tableRef = useRef(null);
  // Helper function to format policy type area
  const formatTargetOriginCountryRegion = (targetOriginCountryRegion) => {
    let formatted = "";
    if (targetOriginCountryRegion.all) formatted += "All, ";
    if (targetOriginCountryRegion.specific) formatted += "Specific, ";
    if (targetOriginCountryRegion.exceptions) formatted += "Exceptions, ";
    return formatted.trim().replace(/,$/, "");

  }
  const formatAreaScaleImplementation = (areaScaleImplementation) => {
    let formatted = "";
    if (areaScaleImplementation.global) formatted += "Global, ";
    if (areaScaleImplementation.EU) formatted += "EU, ";
    if (areaScaleImplementation.national) formatted += "National, ";
    if (areaScaleImplementation.federal) formatted += "Federal, ";
    if (areaScaleImplementation.local) formatted += "Local, ";
    return formatted.trim().replace(/,$/, "");

  }
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
    if (policyTypeArea.asistedReturn) formatted += "Assited Return, ";
    if (policyTypeArea.borderManagement) formatted += "Border Management, ";
    if (policyTypeArea.forcedReturn) formatted += "Forced Return, ";
    if (policyTypeArea.irregularity) formatted += "Irregularity, ";
    if (policyTypeArea.massExpulsion) formatted += "Mass Expulsion, ";
    if (policyTypeArea.preRemovalDetention) formatted += "Pre-Removal Detention, ";
    return formatted.trim().replace(/,$/, ""); // Remove trailing comma
  };

  return policies.length === 0 ? (
    "Please select a Country, Start Year, End Year or enter a policy term or simply click the Search button to list all the policies."
  ) : (
    <div className="overflow-x-auto">
      <div className="mb-2 flex justify-end">
        <PdfDownloader headers={headers} policies={policies}/>
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
                    {header.label.split(" ").slice(-1)}
                    <Tooltip key={index} title={header.description}>
                      <CircleHelp className="size-3" color="#0d7dff" />
                    </Tooltip>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
              
          {pathName==="/policy-legislation-map" ? (<tbody className="divide-y divide-gray-200">
              
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
          </tbody>): pathName==="/return-infrastructure" ? (<tbody className="divide-y divide-gray-200">
              
              {policies.map((policy, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 max-w-xs">
                    {policy.country}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-md">
                    <span className="flex items-center">
                      {policy.policyName}
                    </span>
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    <span className="flex items-center">
                      {policy.actorsInvolved}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {policy.duration}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.summary}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {formatAreaScaleImplementation(policy.areaScaleImplementation)}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {formatPolicyTypeArea(policy.policyTypeArea)}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.targetGroup}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {formatTargetOriginCountryRegion(policy.targetOriginCountryRegion)}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.specific}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.exceptions}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.digitalInfrastructuresTechnologies}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.materialInfrastructure}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.notesBudget}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.officialWebsite}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700 break-words">
                    {policy.programEvalutaion}
                  </td>
                </tr>
              ))}
            </tbody>): "nothing"}
        </table>
      </div>
    </div>
  );
};

export default Table;
