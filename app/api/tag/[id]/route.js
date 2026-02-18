import { query } from "@/lib/db";

// 1. ดึงข้อมูลรายตัว (GET) - เช่น /api/tag/1
export async function GET(request, { params }) {
    try {
        const { id } = await params; 
        const results = await query({
            query: "SELECT * FROM tag WHERE tag_id = ?",
            values: [id],
        });
        
        return new Response(JSON.stringify(results), { 
            status: 200,
            headers: { "Content-Type": "application/json" } 
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

// 2. แก้ไขข้อมูล (PUT) - เช่น /api/tag/1
export async function PUT(request, { params }) {
    try {
        const { id } = await params; 
        const { tag_name } = await request.json();
        
        await query({
            query: "UPDATE tag SET tag_name = ? WHERE tag_id = ?",
            values: [tag_name, id],
        });

        return new Response(JSON.stringify({ message: "updated success" }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

// 3. ลบข้อมูล (DELETE) - เช่น /api/tag/1
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        
        await query({
            query: "DELETE FROM tag WHERE tag_id = ?",
            values: [id],
        });

        return new Response(JSON.stringify({ message: "deleted success" }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}