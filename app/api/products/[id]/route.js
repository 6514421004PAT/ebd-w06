import { query } from "@/lib/db";

// ค้นหาข้อมูลจาก ID (GET)
export async function GET(request, { params }) {
    const { id } = await params;
    try {
        const results = await query({
            query: "SELECT * FROM products WHERE id = ?",
            values: [id],
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

// แก้ไขข้อมูล (PUT)
export async function PUT(request, { params }) {
    const { id } = await params;
    const { name, price } = await request.json();
    try {
        await query({
            query: "UPDATE products SET name = ?, price = ? WHERE id = ?",
            values: [name, price, id],
        });
        return new Response(JSON.stringify({ message: "Updated" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

// ลบข้อมูล (DELETE)
export async function DELETE(request, { params }) {
    const { id } = await params;
    try {
        await query({
            query: "DELETE FROM products WHERE id = ?",
            values: [id],
        });
        return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}