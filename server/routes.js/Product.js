const express = require("express");
const router = express.Router();
const Product = require("../model/Product.js");
const fetchuser = require("../middleware/FetchUser.js");
const { body, validationResult } = require("express-validator");



//fetch all product by single user
router.get("/getallproduct", fetchuser, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

//add products

router.post("/addproduct",fetchuser,
  body("title").isLength({ min: 3 }),
  body("description").isLength({ min: 5 }),

  async (req, res) => {
    console.log("req.files",req.files);
    console.log("req.body",req.body);
    
    try {
      const { title, description, price, instock } = req.body;
      
      console.log('thisis product',req.body);
      
      
      
      const error = validationResult(req);
      if (!error.isEmpty()) {
        res.status(400).json({error:error.array()})
      }


      let images=req.files.map(el=>{
        return el.filename
      }
      )
const product=new Product({
    title, description, price, instock, images, user:req.user.id
})
const savedProduct=await product.save()
res.json(savedProduct)
    } catch (error) {
        res.status(500).send("internalll")
    }
  }
);


//update
router.put('/updateproduct/:id',fetchuser, async (req,res)=>{
    const {title,description,price,instock}=req.body
    try {
        const newProduct={}
        if(title){newProduct.title=title}
        if(description){newProduct.description=description}
        if(price){newProduct.price=price}
        if(instock){newProduct.instock=instock}
    
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(404).send('not fount')
    }
    if(!product.user|| product.user.toString()!==req.user.id){
        return res.status(401).send('not allowed')
    }
    product=await Product.findByIdAndUpdate(req.params.id,{$set:newProduct},{
        new:true
    })
    res.json(product)
    
    } catch (error) {
        res.status(500).send("internalll")
    }
})

//delete product
router.delete('/deleteproduct/:id',fetchuser, async (req,res)=>{
  //const {title,description,price,instock}=req.body
  try {
      /* const newProduct={}
      if(title){newProduct.title=title}
      if(description){newProduct.description=description}
      if(price){newProduct.price=price}
      if(instock){newProduct.instock=instock}
   */
  let product=await Product.findById(req.params.id)
  if(!product){
      return res.status(404).send('not fount')
  }
  if(product.user.toString()!==req.user.id){
      return res.status(401).send('not allowed')
  }
  product=await Product.findByIdAndDelete(req.params.id)
     
  
  res.json({"success":"product deleted",product:product})
  
  } catch (error) {
      res.status(500).send("internalll")
  }
})

module.exports = router;







//200ok
//400bad request
//401unauthorized
//403forbidden
//404notfound
//500internalserver errroor
