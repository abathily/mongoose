const Order = require("../models/orderModel")

// Creer une commande
const createOrder = async (req, res) => {
    try {
        const { user, product, quantity } = req.body
        const newOrder = await Order.create({ user, product, quantity })
        //const order = await
        res.status(201).json({ message: "Creation de commande", newOrder })
    } catch (err) {
        res.status(500).json({ message: "Erreur de Creation de commande", error: err })
    }
}

// Recuperer toutes les commandes
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user")
            .populate("product")
        res.status(200).json({ message: "Tous les commandes", orders })
    } catch (err) {
        res.status(500).json({ message: "Erreur de recuperation de commande", error: err })
    }
}

// Recuperer une commande par ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate("user")
            .populate("product")
        if (!order) return res.status(404).json({ message: "Commande non trouvée" })
        res.status(200).json({ order })
    } catch (err) {
        res.status(500).json({ message: "Erreur de recuperation de commande", error: err })
    }
}

// Modifier une commande
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "Commande mise a jour", updatedOrder })
    } catch (err) {
        res.status(500).json({ message: "Erreure de mise a jour de commande", error: err })
    }
}

// Supprimer une commande
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Commande  supprimé" })
    } catch (err) {
        res.status(500).json({ message: "Erreure de suppresion de commande", error: err })
    }
}

module.exports = {
    createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder
}