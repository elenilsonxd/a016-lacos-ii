// # Exercício 2

// Crie um programa que peça um input de número para o usuário. 
// Com este número, o código deve imprimir a 
// **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

num = prompt('digite um numero')

const tabuada =[1,2,3,4,5,6,7,8,9,10]
for(let index in tabuada){
    console.log(tabuada[index]*num)
    console.log('i', index)
}



// for(let i=1;i<=10;i++){
//     console.log(`o valor de ${num} X ${i} é de: ${(num*i)}`)
// }