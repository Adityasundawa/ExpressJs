const userModels = require("../models/users.js");

const getAllUsers = async (req,res) => {
    try {
        const [data] = await userModels.getAlluser();
        res.json({
            massage : 'Get All User Succees',
            data : data,
        });
    } catch (error) {
        res.status(500).json({
            massage : 'SERVER EROR',
            servermassage: error,
        });
    }
  
}

const createNewUser = async (req,res) => {
    const {body} = req;
    try {
        await userModels.createNewUser(body);
        res.json({
            massage : 'Create New User Succees',
            data : body,
        });
    } catch (error) {
        res.status(500).json({
            massage : 'SERVER EROR',
            servermassage: error,
        });
    }
    
}

const updateUsers  = async (req,res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await userModels.updateUser(body,id);
        res.json({
            massage : 'Update User Succees',
            data : body,
        });
    } catch (error) {
        res.status(500).json({
            massage : 'SERVER EROR',
            servermassage: error,
        });
    }
}

const deleteUsers  = async (req,res) => {
    const {id} = req.params;
    try {
        await userModels.deleteUser(id);
        res.json({
            massage : 'Delete User Succees',
            data : null,
        });
    } catch (error) {
        res.status(500).json({
            massage : 'SERVER EROR',
            servermassage: error,
        });
    }
    
}
module.exports = {
    getAllUsers,
    createNewUser,
    updateUsers,
    deleteUsers,
}
