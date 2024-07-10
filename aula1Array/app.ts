// var a = 'a' //use o let
// let b = 'b'
// const c = 'c'

// b = '2'
// // c = 'd'
// let d: string = 'b'
// let e: number = 2
// let x: boolean = true

// let m: string | number = 2  // m vai ser do tipo string ou numerico e foi inicializada com 2
// m = 'Rafa'

// let w: any = 2 _//Para qualquer tipo
// w = 'rafa'
// w = false

interface Pessoa {
    nome: string,
    idade: number
    profissao?: string
}

const pessoa: Pessoa = {
    nome: "Rafa",
    idade: 26
}

const outraPessoa: Pessoa = {
    nome: "Brendo",
    idade: 27,
    profissao: "Herdeiro"
}

// Um jeito de declarar um array do tiṕo pessoa
const arrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
] 

//Outro jeito de declarar um array do tipo pessoa
const arrayPessoa1: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3    
]

const arrayString = [
    '1', '2', '3'
]

const arrayString1 : Array<string> = [
    '1', '2', '3'
]