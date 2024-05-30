import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Table = ({ policies, headers }) => {
  console.log("policies:", policies.length);
  return policies.length === 0 ? (
    "Plase select a Country, Start Year, End Year or enter a policy term or simply click the Search button to list all the policies..."
  ) : (
    <div className="overflow-x-auto">
      <div className="w-full overflow-x-auto ">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right ">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {policies.map((policy, index) => (
              <tr key={`${index}`}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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
                        <ExternalLink className="size-3" />
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
                        <ExternalLink className="size-3" />
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.asistedReturn ? "Asisted Return, " : ""}
                  {policy.borderManagement ? "Border Management, " : ""}
                  {policy.coercedEnforcedReturn
                    ? "Coerced Enforced Return, "
                    : ""}
                  {policy.generalAsylum ? "General Asylum, " : ""}
                  {policy.irregularity ? "Irregularity, " : ""}
                  {policy.massExpulsion ? "Mass Expulsion, " : ""}
                  {policy.preRemovalDetention ? "Pre-Removal Detention, " : ""}
                  {policy.pushback ? "Pushback, " : ""}
                  {policy.residence ? "Residence, " : ""}
                  {policy.voluntaryReturn ? "Voluntary Return, " : ""}
                  {policy.other ? "Other, " : ""}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {policy.day}/{policy.month}/{policy.year}
                </td>
                <td className="whitespace-normal text-justify px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.policyDescription}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.levelOfLegislation}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.typeOfLegislation}
                </td>
                <td className="whitespace-normal text-justify px-4 py-2 text-gray-700 break-words max-w-xs">
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
