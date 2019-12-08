
const product = [
    { description: `Pink & Blue`,category: `blue`,price: 50,img: `img/shirt1.jpg`},
    { description: `Denim`,category: `blue`,price: 90,img: `img/shirt2.jpg`},
    { description: `Yellow shirt`,category: `yellow`,price: 60,img: `img/shirt3.jpg`},
    { description: `Formal Black`,category: `black`,price: 160,img: `img/shirt4.jpg`},
    { description: `Casual Grey`,category: `grey`,price: 60,img: `img/shirt5.jpg`},
    { description: `Casual Blue`,category: `blue`,price: 50,img: `img/shirt6.jpg`},
    { description: `Checkered Red`,category: `red`,price: 80,img: `img/shirt7.jpg`},
    { description: `Checkered Yellow`,category: `yellow`,price: 50,img: `img/shirt8.jpg`},
    { description: `Formal Blue`,category: `blue`,price: 200,img: `img/shirt9.jpg`},
    { description: `Blazer`,category: `black`,price: 300,img: `img/shirt10.jpg`},
    { description: `Multi- Purpose White`,category: `white`,price: 20,img: `img/shirt11.jpg`},
    { description: `All Black`,category: `black`,price: 40,img: `img/shirt12.jpg`},
    { description: `Rebellious B&W`,category: `white`,price: 45,img: `img/shirt13.jpg`},
    { description: `Stylish Red`,category: `red`,price: 100,img: `img/shirt14.jpg`},
    { description: `Maroon Red`,category: `red`,price: 80,img: `img/shirt15.jpg`},
    { description: `Painter`,category: `mix`,price: 90,img: `img/shirt16.jpg`},
    { description: `Flower B&W`,category: `white`,price: 120,img: `img/shirt17.jpg`},
    { description: `Star B&W`,category: `black`,price: 70,img: `img/shirt18.jpg`},
    { description: `Formal White`,category: `white`,price: 100,img: `img/shirt19.jpg`},
    { description: `Casual White`,category: `white`,price: 90,img: `img/shirt20.jpg`},
];

function getCourseAsHtmlString(product) {

 return `<article class = "product"${product.category}>
 <div class="product">
 <img class="productImage" src=${product.img} alt="productphoto">
    <ul>
        <li><h2>${product.description}</h2></li>
        <li><p>${product.price}</p></li>
        <li><p>Color: ${product.category}</p></li>
    </ul>
<a class="button" href="product.html">View Now</a>
</div>
 </article>`;
}


function switchLayout() {
 document.getElementById('products').classList.toggle('column-view');
 }

 function filterByPrice(product) {
    return product.price < 100;
  }
 

function renderProduct (arr) {
    // Map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getCourseAsHtmlString)

    //Join () the new Array into a single string of HTML
    const strOfHtml = arrOfHtml.join(`\n`)

    //Put the String into the innerHTML of the document's <ul>
    document.getElementById(`products`).innerHTML = strOfHtml;
}
console.table(product);

const affordableShirts = product.filter(filterByPrice);
renderProduct(affordableShirts);

function checkCategory(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingCategories = product.filter(prod => prod.category == userIsLookingFor);
    renderProduct(onlyMatchingCategories);
  }

document.getElementById('layout').addEventListener('click', event => switchLayout() )
document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )
