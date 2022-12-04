// here we fucking go again
image_generate_data = [
  {
    name: 'arissa-bd',
    url: 'https://cdn.discordapp.com/attachments/696405704134885469/929045243997880350/Arissa_2022_bd_gift.png'
  },
  {
    name: 'fireredz-bd',
    url: 'https://cdn.discordapp.com/attachments/696405704134885469/1018163813712924793/junko_-_fireredz_bd_gift.png'
  },
  {
    name: 'yuri-shorthair',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048860118390939689/94258525_2617005165076731_1106995032763662336_n.png'
  },
  {
    name: 'senko-best',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048860919293280296/best_of_senko_moment.jpg'
  },
  {
    name: 'daughter-ke',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048861479023169567/best_daughter_xd.jpg'
  },
  {
    name: 'asperl-bd',
    url: 'https://cdn.discordapp.com/attachments/738853033210806418/1048862175722217532/asperl_bd_gift.jpg'
  }
]

function image_gene () {
  var grid = document.getElementById('grid-image')

  for (var i = 0; i < image_generate_data.length; i++) {
    imgur = image_generate_data[i]
    grid.innerHTML += `
<div class="grid-entry">
    <img class="image" src="${imgur.url}">
</div>`
  }
}

image_gene()
