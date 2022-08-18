let num = prompt("Digite um número para saber sua tabuada:")
let tabuada = [0,1,2,3,4,5,6,7,8,9,10]
for(let i in tabuada){
    console.log(`${num} X ${i} =`,i*num)
}