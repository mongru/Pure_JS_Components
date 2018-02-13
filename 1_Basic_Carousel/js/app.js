document.addEventListener('DOMContentLoaded', () => {

    const prev = document.querySelector('#prevPicture');
    const next = document.querySelector('#nextPicture');
    const lis = document.querySelectorAll('li');
    let record = 0; //current slide
    let num = 0;

// // Automatically change slide
//      setInterval(() => {
//        let record = num % lis.length;
//        console.log(record);
//        lis[record].classList.remove('visible');
//        num++;
//        record = num % lis.length;
//        lis[record].classList.add('visible');
//      }, 2000);
//
    //Show first slide on load
//     lis[record].classList.add('visible');
// //
//     prev.addEventListener('click', () => {
//         lis[record].classList.remove('visible');
//         //Check if current record is larger than -1
//         record = record - 1 < 0 ? 0 : record - 1;
//         lis[record].classList.add('visible');
//     });
//
//     next.addEventListener('click', () => {
//         lis[record].classList.remove('visible');
//         record = record + 1 < lis.length ? record + 1 : record;
//         lis[record].classList.add('visible');
//     });

    // Go to the first slide after reaching the end of li's array
  lis[record].classList.add('visible');
    prev.addEventListener('click', () => {
        lis[record].style.backgroundColor='#' + (Math.random().toString(16) + "000000").substring(2,8);
        lis[record].classList.remove('visible');
        num--;
        record = num % lis.length;
        lis[record].classList.add('visible');
    });

    next.addEventListener('click', () => {
        lis[record].style.backgroundColor='#' + (Math.random().toString(16) + "000000").substring(2,8);
        lis[record].classList.remove('visible');
        num++;
        record = num % lis.length;
        lis[record].classList.add('visible');
    });
});
