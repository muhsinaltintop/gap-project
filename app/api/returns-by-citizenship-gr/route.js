import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    const query = "select * from rbc_greece";
    const [rows] = await db.execute(query);
    db.release();

    // Yanıtınıza CORS başlıklarını ekleyin
    const response = NextResponse.json(rows);
    response.headers.set("Access-Control-Allow-Origin", "*"); // * tüm domainlere izin verir, dilerseniz spesifik bir domain yazabilirsiniz.
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Preflight OPTIONS isteğini yönetin
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}
