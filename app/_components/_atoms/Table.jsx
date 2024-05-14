import Link from "next/link";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

const Table = ({ policies, headers }) => {
  {
  }
  return (
    <div className="overflow-x-auto">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
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
                <td className="flex whitespace-normal px-4 py-2 text-gray-700 break-words max-w-xs">
                  {policy.policyName}
                  {
                    <Link href={"#"}>
                      <ExternalLink className="size-3" />
                    </Link>
                  }
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {policy.day}/{policy.month}/{policy.year}
                </td>
                <td className="whitespace-nowrap px-4 py-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
