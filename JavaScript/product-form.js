// Initialize a new ProductController with currentId set to 0
const productController = new ProductController(0);

// Select the New Item Form
const newProductForm = document.querySelector('#newProductForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newProductType = document.querySelector('#newProductType');
    const newProductImg = document.querySelector('#newProductImg');
    const newProductName = document.querySelector('#newProductName'); 
    const newProductSize = document.querySelector('#newProductSize');
    const newProductPrice = document.querySelector('#newProductPrice');
    const newProductQuantity = document.querySelector('#newProductQuantity');    

    // Get the values of the inputs
    const type = newProductType.value;
    const img = newProductImg.value;
    const name = newProductName.value;
    const size = newProductSize.value;
    const price = newProductPrice.value;
    const quantity = newProductQuantity.value;


    /*
        Validation code here
    */

    // Add the item to the ItemsController
    productController.addProduct(type, img, name, size, price, quantity);

    // Clear the form
    newProductType.value = '';
    newProductImg.value = '';  
    newProductName.value = '';   
    newProductSize.value = '';
    newProductPrice.value = '';  
    newProductQuantity.value = '';    
  
});
