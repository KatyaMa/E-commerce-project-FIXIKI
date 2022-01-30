// Get initial movies
const main = document.getElementById('main');

getProducts("https://vast-eyrie-48149.herokuapp.com/products")

//FETCHING PRODUCTS BY URL
async function getProducts(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showProducts(data);
}

function showProducts(data){

  main.innerHTML = '';

  data.forEach((product) => {
    // destructuring
   const { img, name, size, price } = product

    //constructing div with real product data and then putting it into DOM
    const productElement = document.createElement('div')
    productElement.classList.add('product')

    productElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${product.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${product.price}</h5>
                      <p class="card-text">${product.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

  main.appendChild(productElement)

  })



  
}