
let prato;

let bebida;

let sobremesa;

let preco

let preco1

let preco2


function escolherfrango1 () {

    document.getElementById("frangotop1").style.borderColor = "blue"
    document.getElementById("frangotop2").style.borderColor = "white"
    document.getElementById("frangotop3").style.borderColor = "white"
    
 
    prato = "- Prato: Frango yin-yang"

    preco = 10  
    
}



function escolherfrango2 () {

    document.getElementById("frangotop1").style.borderColor = "white"
    document.getElementById("frangotop2").style.borderColor = "blue"
    document.getElementById("frangotop3").style.borderColor = "white"
    
    prato = "- Prato: Frango yin-yang"

    preco = 2
    
    }

    

function escolherfrango3 () {

    document.getElementById("frangotop1").style.borderColor = "white"
    document.getElementById("frangotop2").style.borderColor = "white"
    document.getElementById("frangotop3").style.borderColor = "blue"
    
    prato = "- Prato: Frangão"

    preco = 5

    }

    
function escolherbebida1 () {

    document.getElementById("bebidatop1").style.borderColor = "blue"
    document.getElementById("bebidatop2").style.borderColor = "white"
    document.getElementById("bebidatop3").style.borderColor = "white"
    
    bebida = "- Bebida: Red Bull"

    preco1 = 7
    
}



function escolherbebida2 () {

    document.getElementById("bebidatop1").style.borderColor = "white"
    document.getElementById("bebidatop2").style.borderColor = "blue"
    document.getElementById("bebidatop3").style.borderColor = "white"
    
    bebida = "- Bebida: coquinha"

    preco1 = 8
    
    }

    

function escolherbebida3 () {

    document.getElementById("bebidatop1").style.borderColor = "white"
    document.getElementById("bebidatop2").style.borderColor = "white"
    document.getElementById("bebidatop3").style.borderColor = "blue"
    
    bebida = "- Bebida: coquinha"
    preco1 = 11
    
    }
    
function escolhersobremesa1 () {

    document.getElementById("mesatop1").style.borderColor = "blue"
    document.getElementById("mesatop2").style.borderColor = "white"
    document.getElementById("mesatop3").style.borderColor = "white"
    
    sobremesa = "- Sobremesa: Tridents melancia"
    preco2 = 14
    
}



function escolhersobremesa2 () {

    document.getElementById("mesatop1").style.borderColor = "white"
    document.getElementById("mesatop2").style.borderColor = "blue"
    document.getElementById("mesatop3").style.borderColor = "white"

    sobremesa = "- Sobremesa: pudim"
    preco2 = 18
    
    
    }

    

function escolhersobremesa3 () {

    document.getElementById("mesatop1").style.borderColor = "white"
    document.getElementById("mesatop2").style.borderColor = "white"
    document.getElementById("mesatop3").style.borderColor = "blue"
    
    sobremesa ="- Sobremesa: pudim"
    preco2 = 111
    
}


  function finalizarpedido () {

    let mensagem = "Olá, gostaria de fazer de fazer o pedido:" + "\n" + prato + "\n" + bebida + "\n" + sobremesa + "\n" + "Total: R$ " + (preco + preco1 + preco2);

    alert (mensagem)
    mensagem = window.encodeURIComponent(mensagem)

    window.open("https://wa.me/5511957859509?text=" + mensagem)



  }


    






    


