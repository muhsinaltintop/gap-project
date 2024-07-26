"use client"
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { HardDriveDownload, Loader2 } from 'lucide-react'
import Button from './Button'
import ReportPDF from './ReportPDF'

const PdfDownloader = ({policies, headers}) => {
    const [isClient, setIsClient] =useState(false)

    useEffect(()=>{
        setIsClient(true)
    }, [])


  return isClient ? (
    <PDFDownloadLink
    fileName={`gaps_report.pdf`}
    document={<ReportPDF headers={headers} policies={policies}/>}
    
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