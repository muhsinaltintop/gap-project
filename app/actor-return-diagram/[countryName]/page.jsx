"use client"
import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);

  // PDF'in var olup olmadığını kontrol eden bir fonksiyon
  const checkPdfExists = async () => {
    try {
      const response = await fetch(`/pdfs/${params.countryName}_ardl.pdf`, {
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
    return <div>No data found for {params.countryName}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.countryName} Actor Diagram
      </h1>
      <PDFViewer filename={`${params.countryName}_ardl`} />
    </div>
  );
};

export default Page;