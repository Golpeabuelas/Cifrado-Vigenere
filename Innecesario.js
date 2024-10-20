const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

export async function Colorear(Caracter){
    document.querySelector('#Abecedario tbody tr td')
    const Celdas = document.getElementsByClassName('Celda')
    let Continuar = true;
    
    for(let i = 0; i < Celdas.length; i++){
        Celdas[i].style.backgroundColor = '#E3C7A1'; 
        Celdas[i].style.color = '#4B2E1F';
    }

    for(let i = 0; i < Celdas.length; i++){
        if(Continuar == false){
            break;
        }

        for(let j = 0; j < Alfabeto.length; j++){
            if(Celdas[i].textContent == Alfabeto.charAt(j)){ 
                Celdas[i].style.backgroundColor = '#4B2E1F'; 
                Celdas[i].style.color = '#FFF8E7';
                
                if(Celdas[j].textContent == Caracter){
                    console.log("ingaturoña ya entro")
                    Continuar = false;
                    break;
                }
            } else{
                Celdas[j].style.backgroundColor = '#E3C7A1'; 
                Celdas[j].style.color = '#4B2E1F';
            }
        }

        if(Continuar == false){
            Celdas[i].style.backgroundColor = '#4B2E1F'; 
            Celdas[i].style.color = '#FFF8E7';
        }
        
        await new Promise(resolve => setTimeout(resolve, 25))
    }
}