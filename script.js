const button = document.querySelector('.butInput');
const input = document.querySelector('.numInput')
const footT = document.querySelector('#foot');
const bicT = document.querySelector('#bice');
const carT = document.querySelector('#car');
const planeT = document.querySelector('#plane');

const foot = 3.6;
const bice = 20.1;
const car = 70;
const plane = 800;

button.addEventListener('click', function (e){
    e.preventDefault()
    const footV = (input.value * 1000) / foot
    const hour = Math.floor(footV / 60)
    const minute = Math.floor(footV % 60)
    footT.textContent = `${hour} soat ${minute} daq`
    // bice
    const biceV = (input.value * 1000) / bice
    const hour1 = Math.floor(biceV / 60) 
    const minute1 = Math.floor(biceV % 60) 
    bicT.textContent = `${hour1} soat ${minute1} daq`
     // car
    const carV = (input.value * 1000) / car
    const hour2 = Math.floor(carV / 60) 
    const minute2 = Math.floor(carV % 60) 
    carT.textContent = `${hour2} soat ${minute2} daq`
     // plane
    const planeV = (input.value * 1000) / plane
    const hour3 = Math.floor(planeV / 60) 
    const minute3 = Math.floor(planeV % 60) 
    planeT.textContent = `${hour3} soat ${minute3} daq`

    if(footV == ''){
        alert('Eltimos qiymat kiriting :( ')
    }
})