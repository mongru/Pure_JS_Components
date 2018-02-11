document.addEventListener('DOMContentLoaded', () => {

    const lis = document.querySelectorAll('.nav>ul>li');
    for (let li of lis) {
        li.addEventListener('mouseover', function() {
            if (this.querySelector('ul')) {
                this.querySelector('ul').style.display = 'block';
            }
        });
        li.addEventListener('mouseout', function() {
            if (this.querySelector('ul')) {
                this.querySelector('ul').style.display = 'none';
            }
        });
    }
});
