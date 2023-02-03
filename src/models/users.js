const dbpool = require("../config/database.js");

const getAlluser = (req,res) => {
    const SQLQuery = "select * from users";
    return dbpool.execute(SQLQuery);
}


const createNewUser = (body) => {
    const SQLQuery = `insert into users (name,email) values ('${body.name}','${body.email}')`;
    return dbpool.execute(SQLQuery);
}


const updateUser = (body,id) => {
    const SQLQuery = `UPDATE users SET name='${body.name}',email='${body.name}' where id = '${id}'`;
    return dbpool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`;
    return dbpool.execute(SQLQuery);
}

module.exports = {
    getAlluser,
    createNewUser,
    updateUser,
    deleteUser,
}