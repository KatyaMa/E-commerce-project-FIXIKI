// Get initial girls tops
const mainGirls = document.getElementById('girlsTops');

getGirlsTops("https://vast-eyrie-48149.herokuapp.com/products/type/GIRLSTOPS")

//FETCHING PRODUCTS GIRLS TOPS BY URL
async function getGirlsTops(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showGirlsTops(data);
}

function showGirlsTops(data){

    mainGirls.innerHTML = '';

  data.forEach((girlsTop) => {
    // destructuring
   const { img, name, size, price } = girlsTop

    //constructing div with real product data and then putting it into DOM
    const girlsTopElement = document.createElement('div')
    girlsTopElement.classList.add('girlsTops')

    girlsTopElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${girlsTop.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${girlsTop.price}</h5>
                      <p class="card-text">${girlsTop.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   mainGirls.appendChild(girlsTopElement)

  })
}






// Get initial girls bottoms
const girlsBottoms = document.getElementById('girlsBottoms');

getGirlsBottoms("https://vast-eyrie-48149.herokuapp.com/products/type/GIRLSBOTTOMS")

//FETCHING PRODUCTS GIRLS BOTTOMS BY URL
async function getGirlsBottoms(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showGirlsBottoms(data);
}

function showGirlsBottoms(data){

    girlsBottoms.innerHTML = '';

  data.forEach((girlsBottom) => {
    // destructuring
   const { img, name, size, price } = girlsBottom

    //constructing div with real product data and then putting it into DOM
    const girlsBottomElement = document.createElement('div')
    girlsBottomElement.classList.add('girlsBottoms')

    girlsBottomElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${girlsBottom.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${girlsBottom.price}</h5>
                      <p class="card-text">${girlsBottom.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   girlsBottoms.appendChild(girlsBottomElement)

  })
}









// Get initial girls Accessories
const girlsAccessories = document.getElementById('girlsAccessories');

getGirlsAccessories("https://vast-eyrie-48149.herokuapp.com/products/type/GIRLSACCESSORIES")

//FETCHING PRODUCTS GIRLS Accessories BY URL
async function getGirlsAccessories(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showGirlsAccessories(data);
}

function showGirlsAccessories(data){

    girlsAccessories.innerHTML = '';

  data.forEach((girlsAccessorie) => {
    // destructuring
   const { img, name, size, price } = girlsAccessorie

    //constructing div with real product data and then putting it into DOM
    const girlsAccessorieElement = document.createElement('div')
    girlsAccessorieElement.classList.add('girlsAccessories')

    girlsAccessorieElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${girlsAccessorie.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${girlsAccessorie.price}</h5>
                      <p class="card-text">${girlsAccessorie.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   girlsAccessories.appendChild(girlsAccessorieElement)

  })
}





// Get initial girls Pajamas
const girlsPajamas = document.getElementById('girlsPajamas');

getGirlsPajamas("https://vast-eyrie-48149.herokuapp.com/products/type/GIRLSPAJAMAS")

//FETCHING PRODUCTS GIRLS Pajamas BY URL
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
