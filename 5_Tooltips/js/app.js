document.addEventListener('DOMContentLoaded', () => {

    const tooltips = document.querySelectorAll('.tooltip');

    for (let tooltip of tooltips) {
        tooltip.addEventListener('mouseover', function() {
            const el = document.createElement('span');
            el.classList.add('tooltipText');
            el.innerText = this.dataset.text;
            this.appendChild(el);
        });

        tooltip.addEventListener('mouseout', function() {
            const toKill = this.querySelector('.tooltipText');
            toKill.parentElement.removeChild(toKill);
        });
    }
});
