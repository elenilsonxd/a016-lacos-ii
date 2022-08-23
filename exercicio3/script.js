// # Exercício 3

// Crie um array com 5 strings. 
// Faça um programa que percorra este array e imprima as strings em formato de ranking, 
// como no exemplo abaixo:

// **Utilize o for...of para resolver**
// ```jsx
// //entrada

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let classificacao in maioresPaises){
    let ordem
    ordem = `${Number(classificacao)+1} - `
        for(let ordem2 of maioresPaises[classificacao]){
            ordem+= `${ordem2}`
        }
        console.log(ordem)
}