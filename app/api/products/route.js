import { query } from "@/lib/db";

export async function GET() {
    try {
        const results = await query({
            query: "SELECT * FROM products",
            values: [],
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, price } = await request.json();
        const result = await query({
            query: "INSERT INTO products (name, price) VALUES (?, ?)",
            values: [name, price],
        });
        return new Response(JSON.stringify({ message: "Created", id: result.insertId }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}