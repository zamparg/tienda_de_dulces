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

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

