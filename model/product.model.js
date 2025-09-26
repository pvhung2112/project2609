const mongoose =  require('mongoose');

const { Schema } = mongoose;
slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Dbproduct = new Schema({
 title: String,
  description: String,
  price: Number,
  discountPercentage:{
    type : Number,
    default : 0
  } ,
  brand: String,
  images : String,
  status : String,
  deleted: {
    default : false,
    type : Boolean
  },
  position : Number,
  deletedate : Date,
  slug :{
    type : String,
    slug : "title",
    unique : true
  }
}, { timestamps: true },{unique : true});
const ModelDbproduct = mongoose.model('products', Dbproduct);
module.exports = ModelDbproduct;