import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { anime_mal_id, user_email } = await request.json()

    // Validasi input
    if (!anime_mal_id || !user_email) {
      return NextResponse.json(
        { isCreated: false, error: "anime_mal_id and user_email are required" },
        { status: 400 }
      )
    }

    // Simpan ke database
    const createCollection = await prisma.collection.create({
      data: { anime_mal_id, user_email }
    })

    return NextResponse.json({
      isCreated: true,
      data: createCollection
    })
  } catch (error) {
    console.error("Error creating collection:", error)
    return NextResponse.json(
      { isCreated: false, error: error.message },
      { status: 500 }
    )
  }
}
