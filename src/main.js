const social = [
  {"label": "facebook", "color": "red"},
  {"label": "twitter", "color": "blue"}
]

const element = document.getElementById('social')
const p = document.createElement('p')
element.appendChild(p)

element.innerHTML = social[0].label