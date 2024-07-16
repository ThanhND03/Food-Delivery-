import "dotenv/config.js"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"




// App config
const app = express()
const port = 4000


// Middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// Api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("Upload"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})
