import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    // URL parametrelerini alıyoruz
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year'); // Yıla göre filtreleme için
    const mode = searchParams.get('mode'); // Mode: 'years' veya 'data'

    let query;
    let params = [];

    if (mode === "years") {
      // Eğer mode 'years' ise, benzersiz yılları getir
      query = "SELECT DISTINCT year FROM rbc_netherlands ORDER BY year";
    } else {
      // Varsayılan olarak tüm verileri getir veya belirli yılı filtrele
      query = "SELECT * FROM rbc_netherlands";
      if (year) {
        query += " WHERE year = ?";
        params.push(year);
      }
    }

    // Veritabanı sorgusunu çalıştır
    const [rows] = await db.execute(query, params);
    db.release();

    // Eğer 'years' modundaysa, sadece yılları döndür
    if (mode === "years") {
      const years = rows.map(row => row.year);
      return NextResponse.json(years);
    }

    // Varsayılan olarak tüm verileri döndür
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
