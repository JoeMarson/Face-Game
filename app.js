let hair_img = document.getElementById('hair')
let eyebrows_img = document.getElementById('eyebrows')
let face_img = document.getElementById('face')
let mouth_img = document.getElementById('mouth')
const hair_btn = document.getElementById('pHair')
const eyebrows_btn = document.getElementById('pEyebrows')
const face_btn = document.getElementById('pFace')
const mouth_btn = document.getElementById('pMouth')

function fHair (){
    hair_img.setAttribute('onmousedown', 'this.stop()')
}

function fEyebrows (){
    eyebrows_img.setAttribute('onmousedown', 'this.stop()')
}

function fFace (){
    face_img.setAttribute('onmousedown', 'this.stop()')
}

function fMouth (){
    mouth_img.setAttribute('onmousedown', 'this.stop()')
}


function main(){
    hair_btn.addEventListener('click', function(){
        fHair()
    })
    eyebrows_btn.addEventListener('click', function(){
        fEyebrows()
    })
    face_btn.addEventListener('click', function(){
        fFace()
    })
    mouth_btn.addEventListener('click', function(){
        fMouth()
    })
}

main()