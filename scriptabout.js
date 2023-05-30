// education array of objects

let education = [
    {
        id: 1,
        desc: "About",
        place: "The major differentiating factor for United Power Purchasing is the House of Brands approach as their offering has become so vast providing a wide range of hand tools, air tools, automotive repair tools, and tool trolleys with mechanic tool sets.With the brands of King Tony and Micro - Tec the target audience is expanded as products of high quality are on offer.",
    },
    {
        id:3 ,
        desc: "Values",
        place: "Quality, Passion, Family Approach, Efficiency and Trustworthiness  <br> Converting the ideas of their customers into reality and providing products with ensuring value as seen in their life time guarantee.<br> In wanting the best for their customers always looking for ways to improve the customer experience and want the purchases to make the lives of the customer easier. They are interested in creating a community network which is prosperous.",
    },
    {
        id: 4,
       desc: "Vision",
       place: "At the core of the brand, and expresses the purpose of the brand. To continuously look for economically beneficial solutions to customers through ever growing ranges of quality. Providing optimal professionalism and efficiency.",
    },
   
    {
        id: 5,
        desc: "OurMantra",
        place: " Partnerships and Quality Tools for Life.Through this mantra the internal stakeholders are reminded of the key values that run throughout UPP in that the company aims to develop long term partnerships with their customers providing reliable tools and quality products and service.",

    },
];

let dispEducation = document.querySelector('.education')
  education.forEach((data) => {
    dispEducation.innerHTML += `
      <div class= "card">
     
      <div class="card-body">
      <p class="text">${data.desc} 
      <br>
      </p>
      @ <span class="im">${data.place}</span>
      <br>
      </div>
      </div>`
  });

/*
// education array of objects

let education = [
    { 
      id: 1,
      year: 2020,
      desc: " Partnerships and Quality Tools for Life.Through this mantra the internal stakeholders are reminded of the key values that run throughout UPP in that the company aims to develop long term partnerships with their customers providing reliable tools and quality products and service.",
      place: "This place",
    },
    {
      id: 2,
      year: 2019,
      desc: "Latest certifacte",
      place: "This place",
    },
    {
      id: 3,
      year: 2018,
      desc: "Latest certifacte",
      place: "This place",
    },
    {
      id: 4,
      year: 2017,
      desc: "Latest certifacte",
      place: "This place",
    },
    {
      id: 5,
      year: 2016,
      desc: "Latest certifacte",
      place: "This place",
    },
  ];
  
  let dispEducation = document.querySelector('.education')
  education.forEach((data) => {
    dispEducation.innerHTML += `
      <div class= "card">
      <h4 class="display-4">${data.year}</h4>
      <div class="card-body">
      <p class="text-white">${data.desc} 
      <br>
      </div>
      </div>`
  });
*/
