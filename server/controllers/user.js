const express = require("express");

// Define routes with userRouter
const userRouter = express.Router();

// Connect to mongoDB
const dbo = require("../models/db");

const ObjectId = require("mongodb").ObjectId;


userRouter.route("/user").get(function (req, res) {
    let db_connect = dbo.getDb("form");
    db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

userRouter.route("/user/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("users")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

userRouter.route("/user/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        active: req.body.active
    };
    db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

userRouter.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            active: req.body.active
        },
    };
    db_connect
        .collection("users")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

userRouter.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("users").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = userRouter;