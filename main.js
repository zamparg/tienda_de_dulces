let recipeContainer = document.getElementById('recipeContainer')

function switchFace(id){
    const face = document.getElementById(id)
    if( face.classList.contains('face_left')){
        face.classList.remove('face_left')
        face.classList.add('face_right')
    } else {
        face.classList.remove('face_right')
        face.classList.add('face_left')
    }

    if( !face.classList.contains('face_up')){
        face.classList.add('face_up')
    }else{
        face.classList.remove('face_up')
    }
}

// carousel

function carrouselOrder(){
    let items = document.querySelectorAll('.carousel .carousel-item')
    
    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}



fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies')
.then(
    res => {return res.json()})
.then(res=>{ printCarrousel(res.data)})
.catch(err =>{console.log(err)})


function printCarrousel( array ) {
    console.log(array)
    recipeContainer.innerHTML=""

    
    array.forEach((recipe)=>{
        
        let element = `
        <div class="carousel-item ${recipe == array[0]?'active':''}">
            <div class="col-sm-6 col-md-4">
                <div class="card bg-tertiary mx-2">
                    <img src="${recipe.imagen}" class="card-img-top carousel_card_img" alt="...">
                    <div class="card-body p-4">
                        <h5 class="card-title">${recipe.nombre}</h5>
                        <p class="card-text text-justify">${recipe.descripcion_tipo}</p>
                        <a href="${recipe.id}" class="btn btn-primary">preparación</a>
                    </div>
                </div>
            </div>
        </div>`
    
    recipeContainer.innerHTML+=element

    })
    console.log(recipeContainer)
    carrouselOrder()
}