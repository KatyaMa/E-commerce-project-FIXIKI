// Get initial boys tops
const boysTops = document.getElementById('boysTops');

getBoysTops("http://localhost:8080/products/type/BOYSTOPS")

//FETCHING PRODUCTS BOYS TOPS BY URL
async function getBoysTops(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showBoysTops(data);
}

function showBoysTops(data){

    boysTops.innerHTML = '';

  data.forEach((boysTop) => {
    // destructuring
   const { img, name, size, price } = boysTop

    //constructing div with real product data and then putting it into DOM
    const boysTopElement = document.createElement('div')
    boysTopElement.classList.add('boysTops')

    boysTopElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${boysTop.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${boysTop.price}</h5>
                      <p class="card-text">${boysTop.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   boysTops.appendChild(boysTopElement)

  })
}







// Get initial boys bottoms
const boysBottoms = document.getElementById('boysBottoms');

getBoysBottoms("http://localhost:8080/products/type/BOYSBOTTOMS")

//FETCHING PRODUCTS BOYS BOTTOMS BY URL
async function getBoysBottoms(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showBoysBottoms(data);
}

function showBoysBottoms(data){

    boysBottoms.innerHTML = '';

  data.forEach((boysBottom) => {
    // destructuring
   const { img, name, size, price } = boysBottom

    //constructing div with real product data and then putting it into DOM
    const boysBottomElement = document.createElement('div')
    boysBottomElement.classList.add('boysBottoms')

    boysBottomElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${boysBottom.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${boysBottom.price}</h5>
                      <p class="card-text">${boysBottom.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   boysBottoms.appendChild(boysBottomElement)

  })
}









// Get initial boys Accessories
const boysAccessories = document.getElementById('boysAccessories');

getBoysAccessories("http://localhost:8080/products/type/BOYSACCESSORIES")

//FETCHING PRODUCTS BOYS Accessories BY URL
async function getBoysAccessories(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showBoysAccessories(data);
}

function showBoysAccessories(data){

    boysAccessories.innerHTML = '';

  data.forEach((boysAccessorie) => {
    // destructuring
   const { img, name, size, price } = boysAccessorie

    //constructing div with real product data and then putting it into DOM
    const boysAccessorieElement = document.createElement('div')
    boysAccessorieElement.classList.add('boysAccessories')

    boysAccessorieElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${boysAccessorie.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${boysAccessorie.price}</h5>
                      <p class="card-text">${boysAccessorie.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   boysAccessories.appendChild(boysAccessorieElement)

  })
}





// Get initial boys Pajamas
const girlsPajamas = document.getElementById('boysPajamas');

getGirlsPajamas("http://localhost:8080/products/type/GIRLSPAJAMAS")

//FETCHING PRODUCTS BOYS Pajamas BY URL
async function getGirlsPajamas(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showGirlsPajamas(data);
}

function showGirlsPajamas(data){

    girlsPajamas.innerHTML = '';

  data.forEach((girlsPajama) => {
    // destructuring
   const { img, name, size, price } = girlsPajama

    //constructing div with real product data and then putting it into DOM
    const girlsPajamaElement = document.createElement('div')
    girlsPajamaElement.classList.add('girlsPajamas')

    girlsPajamaElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${girlsPajama.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${girlsPajama.price}</h5>
                      <p class="card-text">${girlsPajama.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   girlsPajamas.appendChild(girlsPajamaElement)

  })
}
