const Order = require("../models/orderModel")

// Créer une commande
const createOrder = async (req, res) => {
    try {
        const { user, product, quantity } = req.body
        const newOrder = await Order.create({ user, product, quantity })
        res.status(201).json({ message: "Order created successfully", newOrder })
    } catch (err) {
        res.status(500).json({ message: "Error creating order", error: err })
    }
}

// Récupérer toutes les commandes
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user")
            .populate("product")
        res.status(200).json({ message: "All orders", orders })
    } catch (err) {
        res.status(500).json({ message: "Error fetching orders", error: err })
    }
}

// Récupérer une commande par ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate("user")
            .populate("product")
        if (!order) return res.status(404).json({ message: "Order not found" })
        res.status(200).json({ order })
    } catch (err) {
        res.status(500).json({ message: "Error fetching order", error: err })
    }
}

// Modifier une commande
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "Order updated", updatedOrder })
    } catch (err) {
        res.status(500).json({ message: "Error updating order", error: err })
    }
}

// Supprimer une commande
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Order deleted" })
    } catch (err) {
        res.status(500).json({ message: "Error deleting order", error: err })
    }
}

module.exports = {
    createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder
}