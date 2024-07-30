import React, { useRef } from 'react'
import PdfDownloader from './PdfDownloader';
import { Tooltip } from '@mui/material';
import { CircleHelp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PlainTable = () => {
    const tableRef = useRef(null)
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
}

export default PlainTable