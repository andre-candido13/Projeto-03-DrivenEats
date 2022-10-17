
let prato;

let bebida;

let sobremesa;

let preco

let preco1

let preco2






function escolherfrango1 () {

    document.getElementById("frangotop1").style.borderColor = "#32b72f"
    document.getElementById("frangotop2").style.borderColor = "white"
    document.getElementById("frangotop3").style.borderColor = "white"

 
    prato = "- Prato: Espetinhos"

    preco = 14.90 
  
    
}


function escolherfrango2 () {

    document.getElementById("frangotop1").style.borderColor = "white"
    document.getElementById("frangotop2").style.borderColor = "#32b72f"
    document.getElementById("frangotop3").style.borderColor = "white"
    
    prato = "- Prato: Hamburgão"

    preco = 20.90
  
    
    }

    

function escolherfrango3 () {

    document.getElementById("frangotop1").style.borderColor = "white"
    document.getElementById("frangotop2").style.borderColor = "white"
    document.getElementById("frangotop3").style.borderColor = "#32b72f"
    
    prato = "- Prato: Frango Yin Yang"

    preco = 33.90
   

    }

    
function escolherbebida1 () {

    document.getElementById("bebidatop1").style.borderColor = "#32b72f"
    document.getElementById("bebidatop2").style.borderColor = "white"
    document.getElementById("bebidatop3").style.borderColor = "white"
    
    bebida = "- Bebida: Coke"

    preco1 = 5.90
    
    
}



function escolherbebida2 () {

    document.getElementById("bebidatop1").style.borderColor = "white"
    document.getElementById("bebidatop2").style.borderColor = "#32b72f"
    document.getElementById("bebidatop3").style.borderColor = "white"
    
    bebida = "- Bebida: Red Bull"

    preco1 = 13
   
    
    }

    

function escolherbebida3 () {

    document.getElementById("bebidatop1").style.borderColor = "white"
    document.getElementById("bebidatop2").style.borderColor = "white"
    document.getElementById("bebidatop3").style.borderColor = "#32b72f"
    
    bebida = "- Bebida: Capuccino"

    preco1 = 8.50
   
    
    }
    
function escolhersobremesa1 () {

    document.getElementById("mesatop1").style.borderColor = "#32b72f"
    document.getElementById("mesatop2").style.borderColor = "white"
    document.getElementById("mesatop3").style.borderColor = "white"
    
    sobremesa = "- Sobremesa: Tridents melancia"

    preco2 = 2
   
    
}



function escolhersobremesa2 () {

    document.getElementById("mesatop1").style.borderColor = "white"
    document.getElementById("mesatop2").style.borderColor = "#32b72f"
    document.getElementById("mesatop3").style.borderColor = "white"

    sobremesa = "- Sobremesa: Cornetto"

    preco2 = 7
  
    
    
    }

    

function escolhersobremesa3 () {

    document.getElementById("mesatop1").style.borderColor = "white"
    document.getElementById("mesatop2").style.borderColor = "white"
    document.getElementById("mesatop3").style.borderColor = "#32b72f"
    
    sobremesa ="- Sobremesa: Frutily"

    preco2 = 5
   
}



  function finalizarpedido () {

    soma = (preco + preco1 + preco2)
    soma2casasdecimais = parseFloat(soma).toFixed(2);

    let mensagem = "Olá, gostaria de fazer de fazer o pedido:" + "\n" + prato + "\n" + bebida + "\n" + sobremesa + "\n" + "Total: R$ " +  soma2casasdecimais;

    alert (mensagem)
    mensagem = window.encodeURIComponent(mensagem)

    window.open("https://wa.me/5511957859509?text=" + mensagem)



  }


    






    


