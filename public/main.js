/* globals fetch */
var update = document.getElementById('up')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function (response) {
    if (response.ok) return response.json()
  }).then(function (data) {
    window.location.reload()
    console.log(data)
  })
})

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function (response) {
    window.location.reload()
  })
})