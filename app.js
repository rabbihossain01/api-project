function loadUsers () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
          document.body.innerHTML = `<ul>${json
            .map(u => '<li>'  +  u.name + '</li>' )
            .join('')}</ul>`
    })

    .catch(err => console.log(err))
}