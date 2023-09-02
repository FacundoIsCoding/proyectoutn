const sqlite3 = require("sqlite3").verbose();
let sql;

//conectar a la DB
const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

//crear tabla
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
// db.run(sql);

//drop tabla
// db.run("DROP TABLE users");

//insertar datos en la tabla
//  sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
//  db.run(
//    sql,
//   ["flavia", "ursino", "flavia_user", "flavia", "flavia@gmail.com"],
//    (err) => {
//     if (err) return console.error(err.message);
//    }
//  );

//actualizar datos
// sql = `UPDATE users SET password = ? WHERE id = ?`;
// db.run(sql,['jose',1],(err)=> {
//     if (err) return console.error(err.message);
// })

//borrar datos
sql = `DELETE FROM users WHERE id=?`;
db.run(sql,[1],(err)=> {
    if (err) return console.error(err.message);
})


//consultar los datos
sql = `SELECT * FROM users`;
db.all(sql,[],(err,rows) => {
     if (err) return console.error(err.message);
     rows.forEach(row=>{
    console.log(row);
    })
})
