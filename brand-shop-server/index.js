const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// middle ware ---------------
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xevn9vs.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        // await client.connect()
        const productCollection = client.db('productDB').collection('product')
        const userProductCollection = client.db('userProductDB').collection('userproduct')
        // const userCollection = client.db('coffee2DB').collection('user')
        // product create --------------------
        app.post('/product', async (req, res) => {
            const product = req.body;
            const result = await productCollection.insertOne(product)
            res.send(result)
            console.log(product);
        })

        // product read --------------------
        app.get('/product', async (req, res) => {
            const product = productCollection.find();
            const result = await product.toArray()
            res.send(result || { status: false })
            console.log(product);
        })
        // product read singel --------------------
        app.get('/product/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await productCollection.findOne(query);
            // const result = await product.toArray()
            res.send(result || { status: false })
            console.log(result);
        })
        // product put singel --------------------
        app.put('/product/:id', async (req, res) => {
            const id = req.params.id
            const product = req.body
            const query = { _id: new ObjectId(id) }
            const update = {
                $set: {
                    url: product?.url,
                    name: product?.name,
                    brand: product?.brand,
                    price: product?.price,
                    description: product?.description,
                    rating: product?.rating,
                    type: product?.type,
                }
            }
            const result = await productCollection.updateOne(query, update);
            // const result = await product.toArray()
            res.send(result || { status: false })
            console.log(result);
        })
        // #############################################
        // ############## uer pordect colletion ########
        // #############################################
        // product create --------------------
        app.post('/add_to_cart', async (req, res) => {
            const product = req.body;
            const result = await userProductCollection.insertOne(product)
            res.send(result)
            console.log(product);
        })
        // product read --------------------
        app.get('/add_to_cart', async (req, res) => {
            const product = userProductCollection.find();
            const result = await product.toArray()
            res.send(result || { status: false })
            console.log(product);
        })
        // product read singel --------------------
        app.get('/add_to_cart/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await userProductCollection.findOne(query);
            // const result = await product.toArray()
            res.send(result || { status: false })
            console.log(result);
        })
        // product read singel --------------------
        app.delete('/add_to_cart/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await userProductCollection.deleteOne(query);
            // const result = await product.toArray()
            res.send(result || { status: false })
            console.log(result);
        })

        // await client.db("admin").command({ ping: 1 });
        // console.log("successfully connected to MongoDB!");
    } finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('<h1> coffee server is running </h1>')
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})