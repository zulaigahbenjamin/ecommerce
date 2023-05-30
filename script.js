const products = [
  {
    name: "HP Laptop",
    image: "https://i.postimg.cc/J7T372Fq/laptop1.jpg ",
    price: "R7,500"
  },

  {
    name: "Lenova Laptop",
    image: "",
    price: "R8,000"
  },
  {
    name: "MACBOOK Note",
    image: "",
    price: "R55,000"
  },
  {
    name: " ",
    image: "",
    price: "R600"
  },
  {
    name: "",
    image: "",
    price: "R400"
  },
  {
    name: "P",
    image: "",
    price: "R900"
  },
  {
    name: ";",
    image: "",
    price: "R700"
  },
];
products.forEach((data) => {
  if(data.Cat == "jacket") {
      productsSec.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3>
      <div class="card" style= "width:250px">
          <img class="card-img-top img-fluid" style="width:250px; height: 300px !important" src="${data.pic}" alt="Card image">
          <div class="card-body">
              <h6 class="display-">${data.discription}</h6>
              <p class="text-black">${data.price}</p>
              <a href="#" class="btn btn-primary w-100">Add To Cart</a>
          </div>
        </div>
      </div>`;
      





  

