
window.addEventListener("load", (e) => {

//Mostrar o esconder menu al presionar el boton menu movil ------------
    const openMenu = document.querySelector(".nav__open")
    const closeMenu = document.querySelector(".nav__close")
    const menuMovil  = document.querySelector(".nav__ul")

    openMenu.addEventListener("click" , (e) => {
        e.preventDefault()
        menuMovil.classList.toggle("nav__ul--slidein")
    })

    closeMenu.addEventListener("click" , (e) => {
        e.preventDefault()
        menuMovil.classList.toggle("nav__ul--slidein")
    })
//----------------------------------------------------------------------------------





//Mostrar o esconder menu dependiendo si se hace scroll hacia arriba o abajo; Hacer solido el menu o transparente dependiendo del scroll    
    const header = document.querySelector("header")
    let lastY = 0
    window.addEventListener("scroll", (e) => {
        const y = window.scrollY
         
        //console.log(y)
        if(y > lastY){
            if(y > 200){
                header.classList.remove("header--transparent")
            }
            if(y > 600){
                header.classList.add("header--hide")
            }   
            lastY = y
        }else if(y < lastY){
            //console.log("atras")
            if(y < 200){
                header.classList.add("header--transparent")
            }
            header.classList.remove("header--hide")
            lastY = y
        }
    })
//-----------------------------------------------------------------------





//Carousel de cards en Productos -------------------------------------------------------
const cards = document.querySelectorAll(".productos__card")// coleccion con todos las cards
const nextSlide = document.querySelector(".productos__control--next")//boton next slide
const prevSlide = document.querySelector(".productos__control--prev")//boton prev slide
let currentSlider = 0 //slider actual
const numSlides = cards.length - 1 //total de sliders

cards.forEach((item,index) => {//trasladamos a cada card un en el eje X una cantidad basada en su indice * 100
    item.style.transform = `translateX(${index * 100}%)`
})

nextSlide.addEventListener("click", (e) =>{//funcion cuando den click en el boton next
    e.preventDefault()
    if(currentSlider === numSlides){//validamos si se está en el ultimo slider para resetearlo al 0
        currentSlider = 0
    }else{
        currentSlider++ // si no esta aun en el ultimo slider aumentamos en 1 el currentSlider
    }
    
    cards.forEach((item,index) => {//A cada card la trasladamos 
        item.style.transform = `translateX(${100 * (index - currentSlider)}%)`
    })
})

prevSlide.addEventListener("click", (e) =>{// captura el evento click en el boton prev del carousel
    e.preventDefault()
    if(currentSlider === 0){//comprobamos si se está en el slider 0 , si es asi lo mandamos al ultimo slider 
        currentSlider = numSlides //ahora vale la posicion del ultimo slider
    }else{
        currentSlider--//si el current slider no es el primero o sea 0, restamos una posición
    }

    cards.forEach((item,index) => {
        item.style.transform = `translateX(${100 * (index - currentSlider)}%)`
    })
})
// --------------------------------------------------------------------------------------







})