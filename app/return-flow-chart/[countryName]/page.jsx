"use client"
import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);

  const checkPdfExists = async () => {
    try {
      const response = await fetch(`/pdfs/${params.countryName}_rfcl.pdf`, {
        method: "HEAD",
      });
      setPdfExists(response.ok); // PDF mevcutsa response.ok true döner
    } catch (error) {
      setPdfExists(false); // Hata olursa PDF yok gibi davran
    } finally {
      setLoading(false); // Yükleme tamamlandı
    }
  };

  useEffect(() => {
    checkPdfExists();
  }, [params.countryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pdfExists) {
    return <div>No data found for {params.countryName === "unitedKingdom" ? "United Kingdom" : params.countryName}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.countryName} Return Procedures Flow Chart
      </h1>
      <PDFViewer filename={`${params.countryName}_rfcl`} />
    </div>
  );
};

export default Page;