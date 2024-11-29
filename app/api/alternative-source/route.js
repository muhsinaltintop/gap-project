import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    // Query parametrelerini almak için URL'i parse et
    const url = new URL(request.url);
    const country = url.searchParams.get("country");

    // Dinamik sorgu oluştur
    let query = "SELECT * FROM alternativeSource";
    const queryParams = [];

    if (country) {
      query += " WHERE country = ?";
      queryParams.push(country);
    }

    const [rows] = await db.execute(query, queryParams);
    db.release();

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
