let colorsArr = []
let colorWrapper = document.getElementById("colors-wrapper")
let colorInput = document.getElementById("colorInput")
let modeInput = document.getElementById("selectInput")
let btnEl = document.getElementById("btn-el")

const render = ()=>{
    let html = ""
    for(color of colorsArr){
        html += `
        <div class="colorStrip" >
            <div class ="color" style="background:${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>
        `
    }
    colorWrapper.innerHTML = html
}

fetch('https://www.thecolorapi.com/scheme?hex=24B1E0&mode=monochrome&count=6')
    .then(res => res.json())
    .then(data => {
        colorsArr = data.colors
        render()
    })


btnEl.addEventListener('click', ()=>{
    let colorPicked = colorInput.value
    colorPicked = colorPicked.slice(1,colorPicked.length)

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${modeInput.value}&count=6`)
    .then(res => res.json())
    .then(data => {
        colorsArr = data.colors
        render()
    })
})
