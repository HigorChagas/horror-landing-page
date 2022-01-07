function readMore() {
    const dots = document.querySelector('#dots');
    const moreText = document.querySelector('#more');
    const btnText = document.querySelector('#myBtn');

    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more';
        moreText.style.display = 'none';
        moreText.style.transition = '1s';
        btnText.classList.add('read-more');
        btnText.classList.remove('read-less');
    } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less'
        moreText.style.display = 'inline';
        btnText.classList.add('read-less');
        btnText.classList.remove('read-more');
        
    }
}

