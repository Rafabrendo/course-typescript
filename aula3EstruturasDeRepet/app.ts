//for

for(let i=0; i<5; i+=2){
    console.log(i)
}

let x: number = 5
while(true){
    if(x <= 0){
        break
    } else{
        console.log(x)
        x -= 1
    }

}

console.log("\n")

//Arrays

const array: Array<any> = [1, 2, 3, 4, "rafa"] //Array de qualquer tipo

const array1: Array<number> = [1, 2, 3, 4, 5]

const stringNumberArray = ['a', 'b', 'c', 2]

const stringArray2: string[] = ['a', 'b', 'c'] 

console.log(array[1])

//lenght

console.log(`Tamanho do meu array: ${stringArray2.length}`)

console.log("Array original", array)

array.push(5)

console.log("array com novo elemento", array)

const buscaNum = array.find(num => num === 4)
//find -> Returns the value of the first element in the array where predicate is true, and undefined otherwise.

console.log(`Indice: ${array.findIndex(num => num === 4)}`) //para retornar o indice do elemento

console.log(buscaNum)

array.forEach(num => console.log(num))

array.forEach(num => {
    if(num > 2){
        console.log("numero maior que 2")
    }else{
        console.log(num)
    }
})

array.forEach(num => {
    if(num > 2 && num % 2 === 0){
        console.log(num * 2)
    }
})

array.map(num => console.log(num))
