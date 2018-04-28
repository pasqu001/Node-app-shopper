var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.connect("localhost:27017/shopping");

var products = [
  new Product({
    imagePath:
      "https://pre00.deviantart.net/abee/th/pre/i/2012/107/8/c/axl_rose_by_somesee-d4wjc22.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 17500
  }),
  new Product({
    imagePath:
      "https://orig00.deviantart.net/b0fb/f/2016/313/0/3/axl_rose_wpap_by_rizkybobotoh33-danvhfq.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 10500
  }),
  new Product({
    imagePath:
      "https://img00.deviantart.net/d5a3/i/2015/341/3/5/axl_rose_wpap_by_bennadn-d9jc83n.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 10000
  }),
  new Product({
    imagePath:
      "https://i.pinimg.com/originals/01/3f/4f/013f4f70712191cd6fc1a4845f72a8c1.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 15000
  }),
  new Product({
    imagePath:
      "https://pre00.deviantart.net/82ab/th/pre/i/2015/063/3/7/axl_rose_caricature_by_xdrehhh-d8kdql5.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 30000
  }),
  new Product({
    imagePath:
      "http://s3.otherpeoplespixels.com/sites/18051/assets/pF7S4DI1gubt5SWc.jpg",
    title: "Axl Rose",
    description: "cartoon image of Ocot-Dog. The best do in town.",
    price: 25000
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
