require("dotenv").config()
//async errors
require("express-async-errors")
const express = require("express")
const app = express()
const cors = require("cors")

const connectDB = require("./db/connect")
const authRouter = require("./routes/auth")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandlerMiddleware")

// parse json
app.use(express.json())
app.use(cors())

//routes. First arg is path. Below route where we will perform our API ops
app.use("/api/v1/auth", authRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
