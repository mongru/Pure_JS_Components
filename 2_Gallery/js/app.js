document.addEventListener('DOMContentLoaded', () => {

    const lis = document.querySelectorAll('.gallery img');

    for (let li of lis) {
        li.addEventListener('click', function() {
            const canvas = document.createElement('div');
            canvas.classList.add('fullScreen');
            const img = document.createElement('img');
            img.setAttribute('src', this.getAttribute('src'));
            const btn = document.createElement('button');
            btn.innerText = 'close';
            btn.classList.add('close');
            canvas.appendChild(img);
            canvas.appendChild(btn);
            document.querySelector('body').insertBefore(canvas, document.querySelector('.gallery'));
            document.querySelector('.close').addEventListener('click', () => {
                const newElement = document.querySelector('.fullScreen');
                document.querySelector('body').removeChild(newElement);
            });
        });
    }
});
