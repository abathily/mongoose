const router = require("express").Router()
const userContoller = require("../controllers/userController")
const productContoller = require("../controllers/productController")
const orderCtrl = require("../controllers/orderController")

//Route pour utilisateur
router.post('/new-user' , userContoller.createUser)
router.get('/users' , userContoller.allUsers)
router.get('/get-user/:userId' , userContoller.getUser)
router.put('/update-user/:userId' , userContoller.updateUser)
router.delete('/delete-user/:userId' , userContoller.deleteUser)

// Route pour produit
router.post('/new-product' , productContoller.createProduct)
router.get('/products' , productContoller.allProducts)
router.get('/get-product/:productId' , productContoller.getProduct)
router.put('/update-produc/:productId' , productContoller.updateProduct)
router.delete('/delete-product/:productrId' , productContoller.deleteProduct)

//Route pour commande
router.post("/new-order", orderCtrl.createOrder)
router.get("/orders", orderCtrl.getAllOrders)
router.get("/orders/:id", orderCtrl.getOrderById)
router.put("/orders/:id", orderCtrl.updateOrder)
router.delete("/orders/:id", orderCtrl.deleteOrder)



module.exports = router