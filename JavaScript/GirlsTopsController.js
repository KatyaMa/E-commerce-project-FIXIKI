// Create a ProductController class
class GirlsTopsController {
    // Set up the products and currentId property in the contructor
    constructor(currentId = 0) {
        this.girlsTops = [];
        this.currentId = currentId;
    }



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
}
