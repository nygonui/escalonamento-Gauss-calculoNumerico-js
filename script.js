let ordemMatriz;
function getValueOrdem(){
    ordemMatriz = parseInt(document.getElementById('ordemMatriz').value); 
    insertInputsOnForm();
}

function insertInputsOnForm(){
    
    //se não inserir nenhum valor para ordem aparece um alerta e termina a função
    if(isNaN(ordemMatriz)){
        alert('Por Favor insira a ordem antes de submiter');
        return;
    }


    let inputOfMatriz = '';
    // primeiro laço que serão as linhas 
    for(let i = 0; i < ordemMatriz; i++){
        // segunda laço que serão as colunas ou elementos da linha
        for(let j = 0; j < ordemMatriz; j++){
            //vamos incrementar uma variavel com a tag input para depois adicionarmos de uma vez no html
            inputOfMatriz += '<input type="number" id="a' + i + j +'">';

            // cada vez que o elemento da linha for igual ao valor da ordem da matriz, ou seja, último elemento da linha, vamo pular a página 
            if(j+1 == ordemMatriz) {

                inputOfMatriz += '<input type="text" id="b' + i +'"style="border: solid 1px red"><br>'
            }
        }
        
    }
    inputOfMatriz += '<input type="button" value="Submit" onClick="getValuesOfMatriz()">'

    // adiciona a váriavel incrementada com todo os inputs no html
    document.getElementById('myMatriz').innerHTML = inputOfMatriz;
}

function getValuesOfMatriz(){
    let configIdValueA = 'a';
    let configIdValueB = 'b';
    let valueMatrizA;
    let valueMatrizB;
    let myMatrizA = [];
    let myMatrizB = []

    for(let i = 0; i < ordemMatriz; i++){
        let matrizAux = [];
        for(let j = 0; j < ordemMatriz; j++){

            configIdValueA += i.toString() + j.toString();
            valueMatrizA = parseInt(document.getElementById(configIdValueA).value);
            
            matrizAux.push(valueMatrizA);

            configIdValueA = 'a';
        }
        myMatrizA.push(matrizAux);
        
        configIdValueB += i.toString();
        valueMatrizB = parseInt(document.getElementById(configIdValueB).value);
        myMatrizB.push(valueMatrizB);
        configIdValueB = 'b';
        
    }
    console.log(myMatrizA);
    console.log(myMatrizB)
}




