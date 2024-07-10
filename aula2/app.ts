const num: number = 13

if(num > 15){
    console.log('Num maior que 15')
}else if(num === 15){
    console.log('Num igual a 15')
}else{
    console.log('Num menor que 15')
}

const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Voce é um estudante",
    viewer: "Voce pode visuaalizar"
}

function validateUser(user:  string){
    //console.log(typeUser['admin']) //acessando uma propriedade
    console.log(typeUser[user as keyof typeof typeUser])
    //a variavel user é do  tipo chave para o tipo typeUser (user as keyof typeof typeUser)
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')