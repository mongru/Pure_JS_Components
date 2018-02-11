document.addEventListener('DOMContentLoaded', () => {

    const showButton = document.querySelector('#showButton');
    const hideButton = document.querySelector('#hideButton');

    showButton.addEventListener('click', () => filterImgs('none', 'inline-block'));
    hideButton.addEventListener('click', () => filterImgs('inline-block', 'none'));

    const filterImgs = (startDisplay, endDisplay) => {
        let tagInput = document.querySelector('#tagInput').value;
        let gallery = document.querySelector('#gallery').children;
        for (let picture of gallery) {
            picture.style.display = startDisplay;
            let tag = picture.dataset.tag; //string "sport, bike, motorbike"
            let tab = tag.split(','); // make an array of tags ["sport", "bike", "motorbike"]
            // if entered tag matches existing tag display relevant img
            if (tab.indexOf(tagInput) > -1) {
                picture.style.display = endDisplay;
            }
        }
    }
});
