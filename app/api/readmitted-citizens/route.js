import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    // URL parametrelerini alıyoruz
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");

    // Temel sorguyu oluşturuyoruz
    let query = "SELECT * FROM readmittedCitizens";
    let queryParams = [];

    // Eğer country parametresi varsa sorguya ekle
    if (country) {
      query += ` WHERE country = ?`;
      queryParams.push(country);
    }

    // Veritabanı sorgusunu çalıştır
    const [rows] = await db.execute(query, queryParams);
    db.release();

    // Sonuçları döndür
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
