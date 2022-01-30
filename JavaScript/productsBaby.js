// Get initial baby girls
const babyGirls = document.getElementById('babyGirls');

getBabyGirls("https://vast-eyrie-48149.herokuapp.com/products/type/BABYGIRL")

//FETCHING PRODUCTS BABY GIRLS BY URL
async function getBabyGirls(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showBabyGirls(data);
}

function showBabyGirls(data){

    babyGirls.innerHTML = '';

  data.forEach((babyGirl) => {
    // destructuring
   const { img, name, size, price } = babyGirl

    //constructing div with real product data and then putting it into DOM
    const babyGirlElement = document.createElement('div')
    babyGirlElement.classList.add('babyGirls')

    babyGirlElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${babyGirl.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${babyGirl.price}</h5>
                      <p class="card-text">${babyGirl.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   babyGirls.appendChild(babyGirlElement)

  })
}








// Get initial baby boys
const babyBoys = document.getElementById('babyBoys');

getBabyBoys("https://vast-eyrie-48149.herokuapp.com/products/type/BABYBOY")

//FETCHING PRODUCTS BABY BOYS BY URL
async function getBabyBoys(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showBabyBoys(data);
}

function showBabyBoys(data){

    babyBoys.innerHTML = '';

  data.forEach((babyBoy) => {
    // destructuring
   const { img, name, size, price } = babyBoy

    //constructing div with real product data and then putting it into DOM
    const babyBoyElement = document.createElement('div')
    babyBoyElement.classList.add('babyBoys')

    babyBoyElement.innerHTML = `

    <div class=" col card" style="width: 18rem;">
                    <img src= "${babyBoy.img}" class="card-img-top" alt="Girl's top">
                    <div class="card-body">
                      <h5 class="card-title">$${babyBoy.price}</h5>
                      <p class="card-text">${babyBoy.name} </p>
                      <a href="#" class="btn btn-primary">ADD TO BAG</a>
                    </div>
   `

   babyBoys.appendChild(babyBoyElement)

  })
}
