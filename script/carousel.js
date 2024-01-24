let k=0

function carouselInit(){
    const carousel=document.querySelector("carousel")
    const imgs=carousel.querySelectorAll("img")
    let k=0
    const n=imgs.length
    const emplacement=document.querySelector(".illustrations")
    const div=document.createElement("div")
    const img=document.createElement("img")
    const before=document.createElement("a")
    const after=document.createElement("a")
    div.classList.add("carousel-container")
    before.classList.add("carousel-before")
    before.classList.add("arrow")
    before.classList.add("arrow-left")
    before.innerHTML="&#10094;"
    before.addEventListener("click", function(event){
        if(k>0){
            k-=1
        }
        else{
            k=n-1
        }
        img.src=imgs[k].src
    })
    after.classList.add("carousel-after")
    after.classList.add("arrow")
    after.classList.add("arrow-right")
    after.innerHTML="&#10095;"
    after.addEventListener("click", function(event){
        if(k<n-1){
            k+=1
        }
        else{
            k=0
        }
        img.src=imgs[k].src
    })
    img.src=imgs[0].src
    img.classList.add("current_carousel_img")
    div.appendChild(before)
    div.appendChild(img)
    div.appendChild(after)
/*
    const ul=document.createElement("ul")
    div.classList.add("carousel-container")
    emplacement.id="image-carousel"
    emplacement.classList.add("splide")
    ul.classList.add("splide__list")
    for(var i=0 ; i<imgs.length ; i++){
        const li=document.createElement("li")
        li.appendChild(imgs[i])
        li.classList.add("splide__slide")
        ul.appendChild(li)
    }*/
    carousel.remove()
    emplacement.appendChild(div)
}

carouselInit()