sinoalice = [
  {
    name: 'Zirkon',
    url: 'https://cdn.discordapp.com/attachments/838758814496980992/848231581839261766/Zirkon.png'
  }
]

function sino_collab () {
  var grid1 = document.getElementById('sino-collab')
  
  for (var i = 0; i < sinoalice.length; i++) {
    member = sinoalice[i]
    grid1.innerHTML += `
<div class="grid-entry">
    <img class="image"
        src="${member.url}">
    <div class="image-info">
        <a> Username: ${member.name} </a> <br />
    </div>
</div>`
  }
}

sino_collab()
