const links = document.querySelectorAll('.link');
console.log(links);

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href').substr(1);
        document.getElementById(target).scrollIntoView({
            behavior:'smooth',
            block:'end'
        });
    })
})