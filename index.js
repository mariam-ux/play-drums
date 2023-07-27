
let sounds = [
    'sounds/crash.mp3',
    'sounds/kick-bass.mp3',
    'sounds/snare.mp3',
    'sounds/tom-1.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/tom-4.mp3'
]

let images = [
    'images/crash.png',
    'images/kick.png',
    'images/snare.png',
    'images/tom1.png',
    'images/tom2.png',
    'images/tom3.png',
    'images/tom4.png',
]

for(let i = 0; i < images.length; i++) {
    document.querySelectorAll('.drum')[i].style.background = `url('./${images[i]}')`;
    document.querySelectorAll('.drum').forEach((element,index) => {
        let audio = new Audio(`./${sounds[index]}`);
        element.addEventListener('click', () => {
            audio.play();
            
        })
    });
    
}

