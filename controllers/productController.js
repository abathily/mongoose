const Product = require("../models/productModel")

//create a Product 

const createProduct =async(req , res) => {
    
    try {
        const{productName , productDescription , productPrice} = req.body
// c'est la creation ou l'ajout d'un nouveau produit a la BD
    const newProduct = await Product.create({productName , productDescription , productPrice})

    return res.status(201).json({message: "Successfully product creation", newProduct})
    } catch (error) {
        
        return res.status(500).json({message: "Err Server", error})
    }

}
//recuper tous les produits

const allProducts = async (req, res) =>{
    try {

        const products = await Product.find()
        return res.status(200).json({message: "Successfully retrieve products", products})
        
    } catch (error) {
        return res.status(500).json({message: "Err Server", error})
    } 
    

}

//Recuper un seul produit
const getProduct = async (req, res) =>{
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId)
        return res.status(200).json({message: "Successfully retrieve product", Product})
        
    } catch (error) {
        return res.status(500).json({message: "Err Server", error})
    } 
    
}

// Update product

const updateProduct = async (req, res) => {
    const {productName, productDescription, productPrice} = req.body

    const {productId} = req.params;
    const product = await Product.findByIdAndUpdate(
        productId,
        {$set : { 
            productName : productName, 
            productDescription : productDescription,
            productPrice : productPrice
        }},
        {new : true}

    )
    return res.status(200).json({message: "Successfully update product", product})

}

// delete product
const deleteProduct = async(req, res) =>{
    const {productId} = req.params;
    await Product.findByIdAndDelete(productId)

    return res.status(200).json({message: "Successfully delete product"})


}


module.exports ={
    createProduct, allProducts, getProduct, updateProduct, deleteProduct
}