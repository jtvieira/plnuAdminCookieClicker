let numberVal = 0;
const face = document.getElementById('face');
const number = document.getElementById('numberVal');
const select = document.getElementById('selection');
const images = ['bobbyb.jpeg', 'maryp.jpeg', 'vesteban.jpeg'];
const title = ['Hello and welcome to', 'clicker'];
const imgTag = document.getElementById('image');
const welcome = document.getElementById('welcome');
const path = './assets/'
const options = [
    {image: images[0],
     title: `${title[0]} Bobby B ${title[1]}`},
    {image: images[1],
     title: `${title[0]} Mary Paul ${title[1]}`},
    {image: images[2],
     title: `${title[0]} Vesteban ${title[1]}`}
];
if(face) {
    face.addEventListener('click',  () => {
        numberVal++;
        number.textContent = numberVal;
    });

}

const resetCount = () => {
    numberVal = 0;
    number.textContent = numberVal;
}

select.addEventListener('change', () => {
    const index = select.selectedIndex;
    console.log(index);
    switch(index) {
        case 0:
            imgTag.src = path + options[0].image;
            welcome.textContent = options[0].title;
            resetCount();
            break;
        case 1:
            imgTag.src = path + options[1].image;
            welcome.textContent = options[1].title;
            resetCount();
            break;
        case 2:
            imgTag.src = path + options[2].image;
            welcome.textContent = options[2].title;
            resetCount();
            break;
    }
});
