const ModelDbproduct = require("../../model/product.model")
const configurl = require('../../config/system')

module.exports.index = async (req,res)=>{
    const find = {
        deleted : false,
    }
    
    const displayfiller = [
         {
        name :"tất cả",
        status : "",
        class : ""
         },
          {
        name :"hoạt động",
        status : "active",
        class : ""
         },
          {
        name :"dừng hoạt động",
        status : "inactive",
        class : ""
         }
    ]
    
    if(req.query.status){
        find.status = req.query.status
    }else{
        displayfiller[0].class ="active"
    }
    if(req.query.keyword){
        const keyword = req.query.keyword;
        const regex = new RegExp(keyword,"i");
        find.title = regex;
    }
    displayfiller.forEach((item)=>{
        if(item.status == req.query.status)
           item.class = "active"
    })
    const pagination = {
        limit : 6,
        current : 1
    }
    if(req.query.page){
        pagination.skip = (req.query.page - 1) * pagination.limit;
        pagination.current = parseInt(req.query.page);
    }else{
        pagination.current = 1;
    }
    const countData = await ModelDbproduct.find(find).countDocuments(pagination.skip) / pagination.limit;
    const data = await ModelDbproduct.find(find).limit(pagination.limit).skip(pagination.skip)
    
    let ktra = true;
    if(countData == 0)
        ktra = false;
   
    
    res.render("admin/pages/product/product.pug",{
        dbproduct : data,
        fillerStatus : displayfiller,
        valueInputsearch : req.query.keyword,
        boleancount : ktra,
        countpagination : countData,
        page  : pagination
    })
    
}
module.exports.edit = async (req,res)=>{
 req.flash('info', 'cập nhật status thành công');
  await ModelDbproduct.updateOne({_id : req.params.id},{status : req.params.status})
  const backUrl = req.get("Referer");
  res.redirect(backUrl);
}
module.exports.changemulti = async (req,res)=>{
    const type = req.body.type;
    const ids = req.body.getids.split(",");
    if(type== "active" || type == "inactive"){
       await ModelDbproduct.updateMany({_id : {$in: ids} },{status : type});
    }else if(type =="delete"){

    }
  const backUrl = req.get("Referer");
  res.redirect(backUrl);
}
module.exports.deleteone = async (req,res)=>{
  
  await ModelDbproduct.updateOne({_id : req.params.id},{deleted : true,deletedate : Date.now()})
 const backUrl = req.get("Referer");
  res.redirect(backUrl);
}

module.exports.create_get = (req,res)=>{
 res.render("admin/pages/product/product.create.pug");
}


module.exports.create_post = async (req,res)=>{
    req.flash('info', 'thêm sản phẩm thành công');
    req.body.discountPercentage = parseInt(req.body.discountPercentage);
    req.body.price = parseInt(req.body.price);
    req.body.position = parseInt(req.body.position);
    if(req.body.images)
    req.body.images=   `/uploads/${req.file.filename}`
    const product = new ModelDbproduct(req.body);
    await product.save();
    res.redirect(`${configurl.url_adm}/product`);
}
module.exports.editoneproduct = async (req,res)=>{
   const find = {
    _id : req.params.id
   }
  const data =  await ModelDbproduct.find(find);
 console.log(data);
  res.render("admin/pages/product/product.edit.pug",
    {
        product : data
    }
  );

}
module.exports.editoneproduct_post = (req,res)=>{
  console.log(req.body);
  res.send("ok");  
}
module.exports.detailproduct = async (req,res)=>{
    console.log(req.params.id);
    const find = {
       _id : req.params.id
    
    }
    const data = await ModelDbproduct.findOne(find);
    console.log(data);
    res.render("admin/pages/product/product.detail.pug",{
        title : data.title,
        detailproduct : data
    })
}