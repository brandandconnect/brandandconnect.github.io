const menu = document.querySelector('.menu');
        const burguer = document.querySelector('#burguer');
        
        burguer.addEventListener('click', show)
        
        function show () {
            if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
        } else {
            menu.classList.add('is-active');
        }
        }