// here we fucking go again
image_generate_data = [
  {
    name: 'arissa-bd',
    url: 'https://cdn.discordapp.com/attachments/696405704134885469/929045243997880350/Arissa_2022_bd_gift.png',
  },
  {
    name: 'fireredz-bd',
    url: 'https://cdn.discordapp.com/attachments/696405704134885469/1018163813712924793/junko_-_fireredz_bd_gift.png',
  },
  ]

function image_gene () {
  var grid = document.getElementById('grid-image')

  for (var i = 0; i < image_generate_data.length; i++) {
    imgur = image_generate_data[i]
    grid.innerHTML += `
<div class="grid-entry">
    <img class="image"
        src="${imgur.url}">
</div>`
  }
}
