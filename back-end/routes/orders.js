var express = require("express");
var router = express.Router();


//Import model
const connectDb = require("../models/db");
const { ObjectId } = require("mongodb");


//Lấy tất cả đơn hàng dạng json
router.get("/", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("orders");
    const orders = await productCollection.find().toArray();
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});
//Thêm đơn hàng dạng json
router.post("/", async (req, res, next) => {
    const db = await connectDb();
    const OrdersCollection = db.collection("orders");
    const data = req.body;
    const result = await OrdersCollection.insertOne(data);
    if (result.insertedId) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


//Lấy sản phẩm theo id
router.get("/id/:id", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const product = await productCollection.findOne({
        _id: new ObjectId(req.params.id),
    });

    const categoryCollection = db.collection("categories");
    const category = await categoryCollection.findOne({
        _id: new ObjectId(product.categoryId),
    });

    if (product) {
        product.category = category;
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


//Lấy danh sách sản phẩm theo categoryId
router.get("/byCategory/:id", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const products = await productCollection
        .find({ categoryId: new ObjectId(req.params.id) })
        .toArray();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


//Top 10 sản phẩm đánh giá tốt nhất
router.get("/topRating", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const products = await productCollection
        .find()
        .sort({ rating: -1 })
        .limit(10)
        .toArray();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});
router.get("/bestdeals", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const products = await productCollection
        .find()
        .limit(5)
        .toArray();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});
router.get("/specialProducts", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const products = await productCollection
        .find()
        .limit(8)
        .toArray();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});
router.get("/bestSellers", async (req, res, next) => {
    const db = await connectDb();
    const productCollection = db.collection("products");
    const products = await productCollection
        .find()
        .limit(4)
        .toArray();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


module.exports = router;
