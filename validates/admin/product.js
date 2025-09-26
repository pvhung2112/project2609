module.exports.createpost = (req,res,next)=>{
  if(!req.body.title){
        req.flash('info', 'vui lòng nhập tên sản phẩm');
        const backUrl = req.get("Referer");
        res.redirect(backUrl);
        return;
    }
    next();
}
