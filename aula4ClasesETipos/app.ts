class User{
    name: string = "Brendo"
    age: number = 26

    constructor(name?: string, age?: number){
        this.name = name || this.name;
        this.age = age || this.age;
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User("Rafa")
user.showName()

const otherUser = new User("Juca", 28)
otherUser.showName()
