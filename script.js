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

                inputOfMatriz += '<input type="number" id="b' + i +'"style="border: solid 1px red"><br>'
            }
        }
        
    }
    inputOfMatriz += '<input type="button" value="Submit" onClick="getValuesOfMatriz()">'

    // adiciona a váriavel incrementada com todo os inputs no html
    document.getElementById('myMatriz').innerHTML = inputOfMatriz;
}

function getValuesOfMatriz(){

    /* 
        matriz de ordem 3
        [a00, a01, a02] [b0]
        [a10, a11, a12] [b1]
        [a20, a21, a22] [b2]

        a00x1 + a01x2 + a02x3 = b0
        a10x1 + a11x2 + a12x3 = b1
        a20x1 + a21x2 + a22x3 = b2

    */


    let configIdValueA = 'a';
    let configIdValueB = 'b';
    let valueMatrizA;
    let valueMatrizB;
    let myMatrizA = [];
    let myMatrizB = []

    for(let i = 0; i < ordemMatriz; i++){
        let matrizAux = [];
        for(let j = 0; j < ordemMatriz; j++){

            // define o valor do id dos valoresA a serem buscados (ex: a11, a01..)
            configIdValueA += i.toString() + j.toString();

            // pega o valor referente ao id configurado na linha acima
            valueMatrizA = parseInt(document.getElementById(configIdValueA).value);
        
            // insere o valor buscado na matriz auxiliar que é referente a linha da matriz
            matrizAux.push(valueMatrizA);

            //redefine o valor da variavel de configuração do id dos valores de A
            configIdValueA = 'a';
        }
        // insere a matriz auxiliar (referente a linha) na matriz principal
        myMatrizA.push(matrizAux);
        
        // define o valor do id dos valoresB a serem buscados (ex: b2...)
        configIdValueB += i.toString();

        // pega o valor da matriz B referente ao id selecionado na linha acima 
        valueMatrizB = parseInt(document.getElementById(configIdValueB).value);

        // adiciona o valor buscado na linha acima a matriz dos valores B
        myMatrizB.push(valueMatrizB);

        //reinicia a configuração do Id dos valores B para poder pegar o próximo valor
        configIdValueB = 'b';
        
    }
    console.log(myMatrizA);
    console.log(myMatrizB)
}




