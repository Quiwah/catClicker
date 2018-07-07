document.addEventListener("DOMContentLoaded", function() {
    let cat = document.getElementById('cougar');
    let i = 0;
    cat.addEventListener('click', function() {
            i++;
            const count = document.getElementById('count');
            count.innerHTML = i;
    }, false);
});