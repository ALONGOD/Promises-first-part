'use strict'

function onInit() {
    const elInput = document.querySelector('input')
    elInput.addEventListener('input', debounce(onCheckQuestion, 1000))
}
function onCheckQuestion(txt) {
    document.querySelector('.after').innerHTML = ''
    document.querySelector('.ans').hidden = true
    document.querySelector('.loading').hidden = false
    if (txt.length > 3 && txt[txt.length - 1] === '?') {
        getAns()
            .then(ans => renderAns(ans))
    }
}


function renderAns(ans) {
    if (ans.answer === 'yes') {
        getJoke()
            .then(joke => renderJoke(joke))
    } else {
        getDog()
            .then(dog => renderDog(dog))
    }
    console.log('ans is:', ans)
    document.querySelector('.ans h2').innerText = ans.answer
    document.querySelector('.ans img').src = ans.image
}

function onImgReady() {
    const images = document.querySelectorAll('.container img');
    let loadedCount = 0;

    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        }
    });

    if (loadedCount === images.length) {
        document.querySelector('.loading').hidden = true;
        document.querySelector('.ans').hidden = false;
    }
}

function renderJoke(joke) {
    document.querySelector('.after').innerText = joke.value
    console.log(joke.value)
}

function renderDog(dog) {
    var newImage = document.createElement("img");

    // Set the src attribute for the new image
    newImage.src = dog.message;

    // Append the new image to an existing element in the DOM
    document.querySelector('.after').appendChild(newImage);
}