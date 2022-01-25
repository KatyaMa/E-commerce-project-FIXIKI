// Create a ProductController class
class ProductController {
    // Set up the products and currentId property in the contructor
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
    }

    // Create the addProduct method 
    addProduct(type, img, name, size, price, quantity) {
        const product = {
            // Increment the currentId property
            id: this.currentId++,
            type: type,
            img: img,
            name: name,
            size: size,
            price: price,
            quantity: quantity
        };

        // Push the item to the items property
        this.save(product);
        this.saveGirlsTops(product);
        this.saveGirlsBottoms(product);

        //Save products to local storage
       // localStorage.setProduct("products", JSON.stringify(this.products));

       // this.uploadProducts({type, img, name, size, price, quantity});
    }

// for all products
    save({type, img, name, size, price, quantity}){
        const data = { type, img, name, size, price, quantity };

        fetch('http://localhost:8080/products', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update({type, img, name, size, price, quantity}){
        //TODO implement this method
    }

    delete(productId){
        //TODO implement this method
    }

    findById(productId){
        //TODO implement this method
    }


// section for girls tops
saveGirlsTops({type, img, name, size, price, quantity}){
    const data = { type, img, name, size, price, quantity };

    fetch('http://localhost:8080/products/type/GIRLSTOPS', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}



// section for girls bottoms
saveGirlsBottoms({type, img, name, size, price, quantity}){
    const data = { type, img, name, size, price, quantity };

    fetch('http://localhost:8080/products/type/GIRLSBOTTOMS', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}





}
