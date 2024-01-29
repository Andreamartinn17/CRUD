async function submitForm(f) {
    const newMovie = {
        "name": f.ft.value,
        "gender": f.fg.value,
        "year": f.fy.value
    }

    const options = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newMovie),
        };
    await fetch(`http://localhost:3000/movies`, options).then(
        function(data){
            alert(data);
            console.log(data);
        }
    )
}

// let cajita = document.getElementById("cajita")

// async function printUsers() {
//     let users = await getUsers()
//     users.map(user => {
//         sectionTag.innerHTML += 
//         `<h3>${user.name}</h3>
//         <p>${user.email}</p>
//         <button onclick="deleteUser(${user.id})">Delete</button>`
//     })

// }