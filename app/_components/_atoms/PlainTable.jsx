import React, { useRef } from 'react';
import PdfDownloader from './PdfDownloader';
import { Tooltip } from '@mui/material';
import { CircleHelp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PlainTable = ({ policies, headersData, pathName, selectedCountries }) => {
    const tableRef = useRef(null);

    // JSON'dan gelen `headers` verisini işleyin
    const headers = headersData;

    return policies.length === 0 ? (
        "Please select a Country, Start Year, End Year or enter a policy term or simply click the Search button to list all the policies."
    ) : (
        <div className="overflow-x-auto">
            <div className="mb-2 flex justify-end">
                <PdfDownloader headers={headers} policies={policies} pathName={pathName} selectedCountries={selectedCountries} />
            </div>
            <div className="overflow-x-auto rotate-180">
                <table
                    ref={tableRef}
                    className="divide-y-2 divide-gray-200 bg-white text-sm table-fixed rotate-180"
                >
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className={`px-4 py-2 font-bold text-gray-900 bg-secondary text-left ${header.width}`}
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
                    <tbody className="divide-y divide-black align-top">
                        {policies.map((policy, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className='px-4 py-2'
                                    >
                                        {header.accessor === 'policyName' && policy.urlEnglish ? (
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
                                        ) : header.accessor === 'originalPolicyName' && policy.originalUrl ? (
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
                                        ) : (
                                            policy[header.accessor] !== undefined ? policy[header.accessor] : 'n/a'
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlainTable;
