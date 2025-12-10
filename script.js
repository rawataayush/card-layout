const allBtn = document.querySelectorAll('button');

allBtn.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerHTML === 'Following'){
            button.innerHTML = 'Follow';
        } else {
            button.innerHTML = 'Following';
        }
    })
});