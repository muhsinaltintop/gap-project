import React, { useRef } from 'react';
import PdfDownloader from './PdfDownloader';
import { Tooltip } from '@mui/material';
import { CircleHelp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PlainTable = ({ policies, headersData, pathName, selectedCountries }) => {
    const tableRef = useRef(null);

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
                    className="divide-y-2 divide-gray-200 bg-white text-sm rotate-180" style={{ tableLayout: "fixed", width: "120%" }}
                >
                    <thead>
                        <tr>
                            {console.log("headers:", headers)}
                            {console.log("policies:", policies)}

                            {headers.map((header, index) => (
                                <th
                                key={index}
                                style={{ width: header.width }}
                                className="px-4 py-2 font-bold text-gray-900 bg-secondary text-left"
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
                <td key={colIndex} className='px-4 py-2'>
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
                    ) : header.accessor === 'officialWebsite' && policy.officialWebsite ? (
                        <Link href={policy.officialWebsite} target="_blank" className="text-blue-500 underline">
                            Link
                        </Link>
                    ) : header.accessor === 'programEvaluation' && policy.programEvaluation ? (
                        <Link href={policy.programEvaluation} target="_blank" className="text-blue-500 underline">
                            Link
                        </Link>
                    )  : (
                        policy[header.accessor] !== undefined ? policy[header.accessor] : ''
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
