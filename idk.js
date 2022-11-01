link = [
{
	url: 'https://tamoe-neko.tk',
	description: 'rig',
	logo: 'https://imgur.com/0ShEIJ8'
},
]
 // credit fireredz
function generate_html_from_link_info (data) {
  content_row = document.createElement('div')

  // Title
  row_title_container = document.createElement('div')
  row_title = document.createElement('a')
  row_title.classList.add('link', 'underline', 'grid-link')
  row_title.href = data.url
  row_title.innerText = data.title
  row_title_container.appendChild(row_title)

  // Logo (if any)
  if (data.logo) {
    row_title.innerText = ''
    row_title_logo = document.createElement('img')
    row_title_logo.classList.add('link', 'underline', 'link-logo')
    row_title_logo.src = data.logo
    row_title_logo.alt = data.description
    row_title_logo.href = data.url
    row_title_logo.title = `${data.url}: ${data.description}`
    row_title.appendChild(row_title_logo)
  }

  // Done
  content_row.appendChild(row_title_container)

  console.log(content_row)

  return content_row
}

// here we go
lists = document.getElementById('grid_shit')

for (let i = 0; i < links.length; i++) {
  lists.appendChild(generate_html_from_link_info(links[i]))
}

console.log('Done!')