sinoalice = [
  {
    name: 'Zirkon',
    url: 'https://cdn.discordapp.com/attachments/838758814496980992/848231581839261766/Zirkon.png'
  },
  {
    name: 'Nekoraid',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048872941313601546/cookedNeko.png'
  },
  {
    name: 'Eyan',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048872981859930112/Eyan.png'
  },
  {
    name: 'Onihime',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873028571893780/hime.png'
  },
  {
    name: 'Karig',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873084561674312/karig.png'
  },
  {
    name: 'Kaz',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873084859457626/Kaz.png'
  },
  {
    name: 'Kssr',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873085224357950/KSSR.png'
  },
  {
    name: 'Lammy',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873085547335731/lammyBLOOD.png'
  },
  {
    name: 'Neko',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873218024419369/neko.png'
  },
  {
    name: 'Pirin',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873218389315674/Pirin.png'
  },
  {
    name: 'Potatomess',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873218741645322/Potato.png'
  },
  {
    name: 'Shuli',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873219052011520/shuli.png'
  },
  {
    name: 'Snowfieg',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048873293102469170/Snow.png'
  }
]

function sino_collab() {
  var grid1 = document.getElementById('sino-collab')

  for (var i = 0; i < sinoalice.length; i++) {
    member = sinoalice[i]
    grid1.innerHTML += `
<div class="grid-entry-sino">
<a href="${member.url}">
    <img class="image-sino"
        src="${member.url}">
    <div class="image-info-sino">
        <a> Username: ${member.name} </a> <br />
    </div>
</a>
</div>`
  }
}

sino_collab()
