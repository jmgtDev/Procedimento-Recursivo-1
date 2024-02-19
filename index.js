//com estrutura de repetição clássica.
/* function recursiveProcidure(number){
    let result = []
    for(let i = 1; i<= number; i++){
        result.push("chunk")
    }
    const resultPronto = result.join("-")
    console.log(resultPronto)
}

recursiveProcidure(4)
recursiveProcidure(1)
recursiveProcidure(8)
recursiveProcidure(2) */


//sem estrutura de repetição clássica.
/* function recursiveProcidure(number){
    let result = []
    result = "chunk-".repeat(number)
    resultPronto = result.substr(0, (result.length -1))
    console.log(resultPronto)
}

recursiveProcidure(4)
recursiveProcidure(1)
recursiveProcidure(8)
recursiveProcidure(2) */


//com procedimento recursivo, em que uma função chama ela mesma.
/* let result = ''
function recursiveProcidure(number){
    result += "chunk-"
    number --
    if(number > 0){
        recursiveProcidure(number)
    }else{
        resultPronto = result.substr(0, (result.length -1))
        console.log(resultPronto)
        result = ''
    }
}

recursiveProcidure(4)
recursiveProcidure(1)
recursiveProcidure(8)
recursiveProcidure(2) */

//forma do professor com recursividade.
function recursiveProcidure(number){
    if(number === 0){
        return ''
    }
    if(number === 1){
        return 'chunk'
    } else{
        return 'chunk-' + recursiveProcidure(number - 1)
    }
}

console.log(recursiveProcidure(4))
console.log(recursiveProcidure(1))
console.log(recursiveProcidure(8))
console.log(recursiveProcidure(2))