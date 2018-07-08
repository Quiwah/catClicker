document.addEventListener("DOMContentLoaded", function() {
    let cat1 = document.getElementById('cougar');
    let cat2 = document.getElementById('cheetah');
    
    const cat1Name = 'Cougres';
    const cat2Name = 'Flash';

    const count1 = document.getElementById('count-cougar');
    const count2 = document.getElementById('count-cheetah');

    //Display cats' names
    count1.insertAdjacentHTML('beforebegin', cat1Name + ' ');
    count2.insertAdjacentHTML('beforebegin', cat2Name + ' ');
    

    let i = 0;
    let c = 0;
    cat1.addEventListener('click', function() {
            i++;
            count1.innerHTML = i;
    }, false);
    cat2.addEventListener('click', function() {
        c++;
        count2.innerHTML = c;
}, false);
});