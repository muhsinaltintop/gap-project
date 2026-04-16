"use client"
import PDFViewer from "@/app/_components/_atoms/PDFViewer";
import Capitalize from "@/app/_helper/Capitalize";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);

  // PDF'in var olup olmadığını kontrol eden bir fonksiyon
  const checkPdfExists = async () => {
    try {
      const response = await fetch(`/pdfs/promising-${params.countryName}.pdf`, {
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
        Promising Policy for {params?.countryName == "turkiye" ? "Türkiye" : params?.countryName == "iraq" ? "Iraq" : Capitalize(params?.countryName)}
      </h1>
      <PDFViewer filename={`promising-${params.countryName}`} />
    </div>
  );
};

export default Page;