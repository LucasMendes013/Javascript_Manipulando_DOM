const robotron = document.querySelector('#robotron')

robotron.addEventListener('click', dizerOi)

function dizerOi(nome){
    console.log(`Ola ${nome}`)
}

//formas de declarar uma function com dom

// robotron.addEventListener('click', () => {
//     console.log("Uma Arial Function")
// })

// robotron.addEventListener('click', function(){
//     console.log("Uma funcao anonima, nao podemos chamala novamente pois nao tem nome")
// })

// podemos chamar a funcao com o nome dela 
// dizerOi()