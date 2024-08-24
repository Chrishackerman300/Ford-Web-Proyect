document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const openMenu = document.querySelector('#open-menu')
    const closeMenu = document.querySelector('#close-menu')
    const sidebar = document.querySelector('#sidebar')
    const btnDark = document.querySelector('#btnDark')
    const body = document.querySelector('body')

    //EventsListeners
    cargarFunciones()

    //Funciones
    function cargarFunciones(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
        btnDark.addEventListener('click', darkmode)
    }

    function abrirMenu(){
        sidebar.classList.add('show')
        console.log('Abriendo el menu')
    }

    function cerrarMenu(){
        if(sidebar.classList.contains('show')){
            sidebar.classList.remove('show')
            console.log('Cerrando el menu')
        }
    }

    function darkmode(){
        if(body.classList.contains('darkmode')){
            body.classList.remove('darkmode')
        }
        else{
            body.classList.add('darkmode')
        }
    }
})