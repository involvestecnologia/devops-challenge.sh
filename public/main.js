function mudarTitle(id){
document.getElementById('conteudo').getElementsByTagName("h3")[0].innerHTML = "LINUX is better!!";
}

var del = document.getElementById('delete')

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
