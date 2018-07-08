document.addEventListener("DOMContentLoaded", function() {
    let cat1 = document.getElementById('cougar');
    let cat2 = document.getElementById('cheetah');
    
    const catName1 = 'Cougres';
    const catName2 = 'Flash';

    let i = 0;
    let c = 0;
    cat1.addEventListener('click', function() {
            i++;
            const count1 = document.getElementById('count-cougar');
            count1.innerHTML = i;
    }, false);
    cat2.addEventListener('click', function() {
        c++;
        const count2 = document.getElementById('count-cheetah');
        count2.innerHTML = c;
}, false);
});