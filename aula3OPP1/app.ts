//Posso ter funções dentro de objetos
const user ={
    name: "Rafa",
    age: 26,
    showName(){
        console.log(this.name)
    }
}

console.log(user.name)
console.log()
user.showName()

const otherUser = {
    name: "Brendo",
    age: 26,
    showName(){
        console.log(this.name)
    }
}

otherUser.showName()

class User{
    name: string = "Reis"
    age: number = 26



    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user1 = new User("Rafael", 32)
user1.showName()

const otherUser1 = new User("Costa", 55)
otherUser1.showName()