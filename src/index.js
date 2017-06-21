var redes = [
	{'title': 'facebook', 'cls': ' face'},
	{'title': 'twitter'},
	{'title': 'instagram'}
]

const element = document.getElementById('btn_social')
const p = document.createElement('p')
element.appendChild(p)

var offset = 0

function render(item, classes){
	return p.innerHTML = item 
	return element.className = classes
}

redes.forEach(function(rede){
	setTimeout(() => {render(rede.title, rede.cls)},
		15000 + offset)
	offset += 15000
}) 