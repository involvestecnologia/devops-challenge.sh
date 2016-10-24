/* globals fetch */
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
  .then((response) => { 
    console.log(response)
    window.location.reload()
  })
})

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => {
    if (response.ok){
      return response.json()
    }
  })
  .then((response) => {
    window.location.reload()
  })
})
