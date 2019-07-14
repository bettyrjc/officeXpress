// selectors
const products = document.querySelector('#productos')
const title = document.querySelector('#title')
const title_bye = document.querySelector('.letters_content')
const title_square = document.querySelector('.container_white')

title.addEventListener('click', function(){
    console.log('hola');
    
    if(products.classList.contains('is-active')){
        products.classList.remove('is-active')
        title_bye.style.height = '600px'
        title_square.style.border = '10px solid white';
    }else{
        products.classList.add('is-active')
        title_bye.style.height = '100px'
        title_square.style.border = 'none';
    }
})
// const titleOfertas = document.querySelector('#titleOfertas')
// const gang = document.querySelector('#gang_container')
// const cuadro_rosa = document.querySelector('.rosa')
// const gang_content  = document.querySelector('.gang_content')



// titleOfertas.addEventListener('click', function(){
    
//     if(gang.classList.contains('is-active')){
//         gang.classList.remove('is-active')
//         gang_content.style.height = '300px'
//         cuadro_rosa.style.border = '10px solid white'      
//     }else{
//         gang.classList.add('is-active')
//         gang_content.style.height = '100px'
//         cuadro_rosa.style.border = 'none'
//     }
// })