// Get initial movies
const main = document.getElementById('main');

getUsers("http://localhost:8080/list_users")

//FETCHING Users BY URL
async function getUsers(url){
  const res = await fetch(url, {mode: 'cors'});
  const data = await res.json();

  showUsers(data);
}

function showUsers(data){

  main.innerHTML = '';

  data.forEach((user) => {
    // destructuring
   const { email, firstName, lastName } = user

    //constructing div with real user data and then putting it into DOM
    const userElement = document.createElement('div')
    userElement.classList.add('user')

    userElement.innerHTML = `

    
    <div >
      <form th:action = "@{/logout}" method = "post">
          <p>
            Welcome
          </p>
          <input type="submit" value="Sign Out"/>
      </form>

    </div>
    <div class="container text-center">
      <h2>List of all users</h2>
    </div>
    <div>
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
              <th>User ID</th>
              <th>E-mail</th>
              <th>First Name</th>
              <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr th:each="user: ${listUsers}">
            <td> "${user.id}"User ID</td>
            <td> "${user.email}"Email</td>
            <td> "${user.firstName}"First Name</td>
            <td> "${user.lastName}"Last Name</td>
          </tr>

        </tbody>
      </table>
    </div>

   `

  main.appendChild(userElement)

  })



  
}