"use client"
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { HardDriveDownload, Loader2 } from 'lucide-react'
import Button from './Button'
import ReportPDFPolicyLegislation from './ReportPDFPolicyLegislation'
import ReportPDFReturnInfrastructure from './ReportPDFReturnInfrastructure'
import ReportPDFInternational from './ReportPDFInternational'

const PdfDownloader = ({policies, headers, pathName, selectedCountries}) => {
    const [isClient, setIsClient] =useState(false)

    useEffect(()=>{
        setIsClient(true)
    }, [])

    const capitaliseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const formattedCountries = selectedCountries.map(capitaliseFirstLetter);


  return isClient ? (
    <PDFDownloadLink
    fileName={pathName === "/policy-legislation" ? (`GAP_Policy_Mapping_(${formattedCountries.join(', ')})`): pathName === "/return-infrastructure" ? (`GAP_Return_Infrastructure_(${formattedCountries.join(', ')})`) : pathName === "/international-cooperation" ? (`GAP_International_Cooperation_(${formattedCountries.join(', ')})`) : "gaps_report"}
    document={pathName === "/policy-legislation" ? (<ReportPDFPolicyLegislation headers={headers} policies={policies} pathName={pathName} selectedCountries={selectedCountries} />) : pathName === "/return-infrastructure" ? (<ReportPDFReturnInfrastructure headers={headers} policies={policies} pathName={pathName} selectedCountries={selectedCountries} />) : pathName === "/international-cooperation" ? (<ReportPDFInternational headers={headers} policies={policies} pathName={pathName} selectedCountries={selectedCountries} />) : ""}
    
    >
        <Button label={"Download PDF"} icon={
          <HardDriveDownload className='mr-2'/>
        } customCSS={"bg-primary text-white"}
      />
            

    </PDFDownloadLink>
  ) : (
    <Loader2 className='animate-spin'/>
  )

}

export default PdfDownloader