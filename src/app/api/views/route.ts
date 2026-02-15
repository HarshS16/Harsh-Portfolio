import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("https://api.counterapi.dev/v1/harsh-portfolio/views/up", {
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to fetch viewer count" },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Error proxying viewer count:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
