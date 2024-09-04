import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const db = await pool.getConnection();

    const query = "select * from rbc_greece";
    const [rows] = await db.execute(query);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
