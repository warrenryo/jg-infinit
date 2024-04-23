const mysql = require('mysql')


const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'jginfinit',
    port:3306
})



module.exports = (query) => {
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if(err) reject(err);
            connection.query(query, (err, result)=>{
                if(err) reject(err)
                resolve(result)
            })
            connection.release();
        })
    })


}