const Products = [{
    imageLink:"http://mvbinz.xyz/images/1.jpg",
    name:"Rayon a-line Dress",
    price: "13.45", 
    type: "Orther",
}];

module.exports ={
    getProducts: function (req, res, next) {
        res.status(200).json({products:Products})
    },
    createProducts: function (req, res, next) {
        const product = req.body;
    
        console.log(product);
        Products.push({...product});
    
        res.status(201).json({mess: "Products is added to the database"})
    },
}
