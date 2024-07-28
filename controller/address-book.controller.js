'use strict'


function onAsk() {
    document.querySelector('.ans').hidden = true
    document.querySelector('.loading').hidden = false
    getAns()
        .then(ans => renderAns(ans))
}



function renderAns(ans) {
    console.log('ans is:', ans)
    var phoneBookHtml = ''
    ans.forEach(person => {
        phoneBookHtml += `first name: ${person.fname} <br> last name: ${person.lname} <br> number: ${person.tel} city: <br> address: ${person.address} <br> city: ${person.city} <br> <img src=https://robohash.org/${person.fname}?set=set5 onLoad=onImgReady()> <br><br>`

    });
    document.querySelector('.ans').innerHTML = phoneBookHtml
    // document.querySelector('.loading').hidden = true
    // document.querySelector('.ans').hidden = false
}

function onImgReady() {
    const images = document.querySelectorAll('.ans img');
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
