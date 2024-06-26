const categoriesRouter = require('express').Router();
const {findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, updateCategory, findCategoryById, deleteCategory} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');
  
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  ); 

categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted,
)
  
module.exports = categoriesRouter;