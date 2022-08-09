    var resultado = document.querySelector('#visor')
    var um = document.querySelector('#um')
    var dois = document.querySelector('#dois')
    var tres = document.querySelector('#tres')
    var quatro = document.querySelector('#quatro')
    var cinco = document.querySelector('#cinco')
    var seis = document.querySelector('#seis')
    var sete = document.querySelector('#sete')
    var oito = document.querySelector('#oito')
    var nove = document.querySelector('#nove')
    var zero = document.querySelector('#zero')
    var virgula = document.querySelector('#virgula')
    var apagar = document.querySelector('#apagar')
    var mais = document.querySelector('#mais')
    var menos = document.querySelector('#menos')
    var vezes = document.querySelector('#vezes')
    var dividir = document.querySelector('#dividir')
    var igual = document.querySelector('#igual')

    um.addEventListener('click', clicou1)
    dois.addEventListener('click', clicou2)
    tres.addEventListener('click', clicou3)
    quatro.addEventListener('click', clicou4)
    cinco.addEventListener('click', clicou5)
    seis.addEventListener('click', clicou6)
    sete.addEventListener('click', clicou7)
    oito.addEventListener('click', clicou8)
    nove.addEventListener('click', clicou9)
    zero.addEventListener('click', clicou0)
    virgula.addEventListener('click', clicouvirgula)
    apagar.addEventListener('click', clicouapagar)
    mais.addEventListener('click', clicoumais)
    menos.addEventListener('click', clicoumenos)
    vezes.addEventListener('click', clicouvezes)
    dividir.addEventListener('click', clicoudividir)
    igual.addEventListener('click', clicouigual)

    

    function clicou1(){
        var num = 1
        resultado.innerHTML += num
    }
    function clicou2(){
        var num = 2
        resultado.innerHTML += num
    }
    function clicou3(){
        var num = '3'
        resultado.innerHTML += `3`
    }
    function clicou4(){
        var num = '4'
        resultado.innerHTML += `4`
    }
    function clicou5(){
        var num = '5'
        resultado.innerHTML += `5`
    }
    function clicou6(){
        var num = '6'
        resultado.innerHTML += `6`
    }
    function clicou7(){
        var num = '7'
        resultado.innerHTML += `7`
    }
    function clicou8(){
        var num = '8'
        resultado.innerHTML += `8`
    }
    function clicou9(){
        var num = '9'
        resultado.innerHTML += `9`
    }
    function clicou0(){
        var num = '0'
        resultado.innerHTML += `0`
    }
    function clicouvirgula(){
        var num = '.'
        resultado.innerHTML += `,`
    }
    function clicouapagar(){
        var num = 'apagar'
        resultado.innerHTML += `apagar`
    }
    function clicoumais(){
        
        
    }
    function clicoumenos(){
        var num = '-'
        resultado.innerHTML += `-`
    }
    function clicouvezes(){
        var num = '*'
        resultado.innerHTML += `x`
    }
    function clicoudividir(){
        var num = '/'
        resultado.innerHTML += `/`
    }
    function clicouigual(){
        var teste = document.querySelector('#teste')
        teste.innerHTML = `O teste é aqui ${num}`
        
    }
    

   
    
