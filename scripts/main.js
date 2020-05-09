let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg'){
        myImage.setAttribute('src', 'images/firefox-2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla awsome,' + myName + '!!!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla awsome,' + storedName + '...';
}

myButton.onclick = function() {
    setUserName();
}