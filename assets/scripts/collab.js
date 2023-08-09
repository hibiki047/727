// redz: im fucking lazy so lets just use javascript
pakb_collab_data = [
  {
    name: 'Asperl',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203323192397924/asperl.png',
    tag: 'Asperl#4056'
  },
  {
    name: 'aXccel',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203323494371328/axceel.png',
    tag: 'aXccel#2005'
  },
  {
    name: 'Bright',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203323783774228/bright_fix.png',
    tag: 'Bright#0582'
  },
  {
    name: 'FireRedz',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203324089978880/fireredz_junko.png',
    tag: 'FireRedz#0537'
  },
  {
    name: 'Ivine',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203324396146738/ivine.png',
    tag: 'Ivine123#0236'
  },
  {
    name: 'Mystia',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203324761047101/mystia.png',
    tag: 'Mystia#8755'
  },
  {
    name: 'Neko',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203325339881492/neko.png',
    tag: 'Hibiki#1165'
  },
  {
    name: 'Nia',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203325687992320/nia.png',
    tag: 'nxlnia#0450'
  },
  {
    name: 'Mii',
    url: 'https://cdn.discordapp.com/attachments/782136789103280129/1048203325960618004/niti.png',
    tag: 'Mii#7142'
  },
  {
    name: 'Mooth',
    url: 'https://cdn.discordapp.com/attachments/1018053086893326426/1036853466531909642/mooth.png',
    tag: 'Mooth#3118'
  }
]

function add_collab() {
  var grid = document.getElementById('collab-pakb')

  for (var i = 0; i < pakb_collab_data.length; i++) {
    member = pakb_collab_data[i]
    grid.innerHTML += `
<div class="grid-entry">
    <img class="image"
        src="${member.url}">
    <div class="image-info">
        <a> Username: ${member.name} </a> <br />
        <a> Discord: ${member.tag} </a>

    </div>
</div>`
  }
}

add_collab()
