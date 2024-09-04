import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const origin = request.headers.get("origin");
    const allowedOrigins = ['*'];

    // CORS kontrolü: sadece izin verilen kökenlere izin veriyoruz
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse('CORS policy: This origin is not allowed', { status: 403 });
    }

    const db = await pool.getConnection();

    const query = "select * from rbc_germany";
    const [rows] = await db.execute(query);
    db.release();

    const response = NextResponse.json(rows);

    // CORS başlıklarını yanıtımıza ekliyoruz
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
