const usersRouter = require('express').Router();

const { findAllUsers, checkIsUserExists, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, createUser,findUserById, updateUser, deleteUser, filterPassword, hashPassword} = require('../middlewares/users');
const { sendUserCreated, sendUserById, sendAllUsers, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
); 
  
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  ); 

usersRouter.delete(
    "/users/:id", 
    checkAuth,
    deleteUser,
    sendUserDeleted,
)

module.exports = usersRouter;