window.onload = function () {
    const images = [
        'images/kunstwerk_1.jpeg',
        'images/kunstwerk_2.jpeg',
        'images/kunstwerk_3.jpeg',
        'images/kunstwerk_4.jpeg',
        'images/kunstwerk_5.jpeg',
        'images/kunstwerk_6.jpeg',
        'images/kunstwerk_7.jpeg',
    ];

    const column1 = [];
    const column2 = [];
    const column3 = [];
    const column4 = [];

    function randomPlaatje() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function vulArrays() {

        for( i=0; i<4; i++ ) {
            column1.push(randomPlaatje() );
            column2.push(randomPlaatje() );
            column3.push(randomPlaatje() );
            column4.push(randomPlaatje() );
        }

        console.log(column1);
        console.log(column2);
        console.log(column3);
        console.log(column4);
    }

    vulArrays();

    function perGroep(){
        for(i=0; i < 5; i++){
            lijst = document.createElement('ul')
        }
    }
     
}
    

    //     const viewportHeight = document.documentElement.clientHeight;

//     const main = document.querySelector('main');

//     function randomPlaatje() {
//         return images[Math.floor(Math.random() * images.length)];
//     }

//     function plaatjeRow() {
//         for (let index = 0; index < 7; index++) {
//             const img = randomPlaatje();
//             const imgEl = createImageElement(img);
//             main.appendChild(imgEl); //
//         }
//     }

//     for (let index = 0; index < 12; index++) {
//         plaatjeRow();
//     }

//     function createImageElement(img) {
//         const imgEl = document.createElement('img');
//         imgEl.setAttribute('src', img);
//         imgEl.setAttribute('height', 350);
//         return imgEl;
//     }

//     window.addEventListener('scroll', function (event) {
//         const scrolledY = window.scrollY;
//         const pageHeight = document.documentElement.scrollHeight;

//         const scrolledToEnd = (scrolledY + viewportHeight) >= pageHeight;

//         if (scrolledToEnd) {
//             plaatjeRow();
//         }
//     });
// }
