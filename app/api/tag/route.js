import { query } from "@/lib/db";

// สำหรับดึงข้อมูลทั้งหมด (GET /api/tag)
export async function GET() {
    try {
        const results = await query({
            query: "SELECT * FROM tag",
            values: [],
        });
        return new Response(JSON.stringify(results), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

// สำหรับเพิ่มข้อมูล (POST /api/tag)
export async function POST(request) {
    try {
        const { tag_name } = await request.json();
        const result = await query({
            query: "INSERT INTO tag (tag_name) VALUES (?)",
            values: [tag_name],
        });
        return new Response(JSON.stringify({ message: "created", data: result }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}