const path = require('path')
const express = require("express")
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")
const port = process.env.PORT || 3000

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to database!'))
  .catch((err) => console.log(err))

// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON')
})

app.use(express.json())

// ZingMp3Router
const ZingMp3Router = require("./src/routes/ZingRouter")
app.use("/api", cors({ origin: '*' }), ZingMp3Router)

// AuthRouter
const AuthRouter = require("./src/routes/AuthRouter")
app.use("/api", cors({ origin: '*' }), AuthRouter)

// UserRouter
const UserRouter = require("./src/routes/UserRouter")
app.use("/api", cors({ origin: '*' }), UserRouter)

// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
