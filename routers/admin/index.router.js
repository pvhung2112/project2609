const routerdashbroad = require("./dashbroad.router")
const routerProduct = require("./product.router")


module.exports = (app)=>{
  app.use("/admin/dashbroad",routerdashbroad)
  app.use("/admin/product",routerProduct)
}