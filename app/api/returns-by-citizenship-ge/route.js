import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    // URL parametrelerini alıyoruz
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');

    // Yıl parametresi varsa, sorguya ekleyelim
    let query = "SELECT * FROM rbc_germany";
    if (year) {
      query += ` WHERE year = ?`;
    }

    // Veritabanı sorgusunu çalıştır
    const [rows] = await db.execute(query, year ? [year] : []);
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
