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
    document.getElementById('createMultiplicator').innerHTML = '';
}


let myMatrizA = [];
let myMatrizB = [];

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
    console.log(myMatrizB);

    let buttonCreateMultiplicator = '<input type="button" value="Create Multiplicator" onClick="setMultiplicator()">'

    methodGauss();
}


function methodGauss(){
    let aux = [];
    let pivo = [];
    for (let i = 0; i < ordemMatriz; i++){
        
        pivo = myMatrizA[i][i];
        console.log(pivo);
        
        for (let j = i+1; j < ordemMatriz; j++){
            aux = (myMatrizA[j][i])/pivo;
            for (let k = 0; k < ordemMatriz; k++){
                myMatrizA[j][k] = myMatrizA[j][k] - aux*myMatrizA[i][k];
            }
            myMatrizB[j] = myMatrizB[j] - aux*myMatrizB[i];            
        }
    }

    console.log(myMatrizA)
    console.log(myMatrizB)
}

function findIncognitas(){
    let incognitas = [];
    let result = 0;
    let somaLinhas = [];
    
    for(let i = 0; i < ordemMatriz; i++){
        incognitas.push(0);
        somaLinhas.push(0);
    }
    
}

/*
matriz de ordem 3
        [a00, a01, a02] [b0]
        [a10, a11, a12] [b1]
        [a20, a21, a22] [b2]

        x1, x2, x3 b
    l1  [1, 2, 3] [2]
    l2  [0, 4, 6] [1]
    l3  [0, 0, 2] [7]


    l3 eu quero achar o x3, que vai ser o seu coeficiente dividido por B de l3 menos os outros valores de l3
    l2 eu quero achar o x2, que vai ser o seu coeficiente dividido por B de l2 menos os outros valores de l2
    l1 eu quero achar x1, que vai o ser seu coeficiente dividido por B de l1 menos os outros valores de l1

    x3 = 7/5
    x2 = (1 - 6*x3)/4
    x1 = (2 - 3*x3 - 2*x2)/1


    revertando a matriz eu terei

        x1, x2, x3 b
    l1  [0, 0, 2] [7]
    l2  [0, 4, 6] [1]
    l3  [1, 2, 3] [2]
*/