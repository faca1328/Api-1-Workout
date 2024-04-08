const fs = require('fs');

//simulamos el guardado que una db haria automaticamente

const saveInDB = (db) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(db , null , 2),{
        encoding: 'utf8',
    });
};


module.exports = { saveInDB }