import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  // แก้ไขข้อมูลการเชื่อมต่อตรงนี้
  const dbconnection = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,          // <--- สำคัญมาก! ต้องเป็น 3307 ตามที่คุณแก้ใน XAMPP
    database: "ebd-demo", // ชื่อ Database ต้องสะกดตรงกับใน phpMyAdmin
    user: "root",
    password: "",        // ปกติ XAMPP จะไม่มีรหัสผ่าน
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    await dbconnection.end();
    return results;
  } catch (error) {
    await dbconnection.end();
    throw Error(error.message);
  }
}