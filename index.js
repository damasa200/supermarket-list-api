require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./src/routes')
const cors = require ("cors");
const app = express();
app.use(express.json());
app.use (cors({ origin: "*",
  
})
);
const PORT= Number(process.env.PORT )|| 3333;
console.log({PORT,db: process.env. DATABASE_URL})

async function connectDatabase(){
  await mongoose.connect(process.env.DATABASE_URL);
}



app.listen(PORT, () => {
  connectDatabase().catch((error) => {
    console.log(`Error Connecting database: ${error}`);
  });

  app.use("/", routes);
  console.log("App is running at port 3333");
});
