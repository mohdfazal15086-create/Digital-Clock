let hour = document.querySelector('#hour')
let minutes = document.querySelector('#minutes')
let second = document.querySelector('#second')
let ampm = document.querySelector('#ampm')


const getDate = () => {
    const date = new Date()
    let hrs = date.getHours()

    let ap = "AM"
    if (hrs >= 12) {
        ap = "PM"
    }

    if (hrs > 12) {
        hrs -= 12
    }

    hour.innerHTML = hrs.toString().padStart(2, '0')
    minutes.innerHTML = date.getMinutes().toString().padStart(2, '0')
    second.innerHTML = date.getSeconds().toString().padStart(2, '0')
    ampm.innerHTML = ap
}

window.addEventListener('load', getDate)

setInterval(getDate, 1000)