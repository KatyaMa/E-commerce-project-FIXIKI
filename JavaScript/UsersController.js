// Create a userController class
class UsersController {
    // Set up the users and currentId property in the contructor
    constructor(currentId = 0) {
        this.users = [];
        this.currentId = currentId;
    }

    // Create the addUser method 
    addUser( email, firstName, lastName) {
        const user = {
            // Increment the currentId property
            id: this.currentId++,
            email: email,
            firstName: firstName,
            lastName: lastName
        };

        // Push the item to the items property
        this.save(user);
     
        //Save users to local storage
       // localStorage.setuser("users", JSON.stringify(this.users));

       // this.uploadusers({type, img, name, size, price, quantity});
    }

// for all users
    save({email, firstName, lastName}){
        const data = { email, firstName, lastName };

        fetch('http://localhost:8080/list_users', {
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

    update({email, firstName, lastName}){
        //TODO implement this method
    }

    delete(userId){
        //TODO implement this method
    }

    findById(userId){
        //TODO implement this method
    }


}
