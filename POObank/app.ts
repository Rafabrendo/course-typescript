//Dio Banking

//name, accountNumber
//depositar, sacar

abstract class Account{
    name: string
    accountNumber: number
    balance: number

    constructor(name?: string, accountNumber?: number, balance?:number){
        this.name = name || "";
        this.accountNumber = accountNumber || 0;
        this.balance = 20
    }

    deposit = () =>{
        //...
    }

    withdraw = () => {
        //...
    }

    getBalance = () => {
        console.log(this.balance)
    }
}

class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id?: number, name?: string, accountNumber?: number){
        super(name, accountNumber)
        this.doc_id = doc_id || 0
    }
}

class CompanyAccount extends Account{

    constructor(name?: string, accountNumber?: number){
        super()
    }

    getLoan = () =>{
        console.log('Você pegou um empréstimo')
    }
}


// class Admin extends Account{
//     balance: number

//     constructor(name?: string, accountNumber?: number, balance?: number){
//         super(name, accountNumber, balance)
        
//     }
// }

// const adminAccount: Admin   = new Admin("", 335)
// console.log(adminAccount)

// const account: Account = new Account("Rafa", 2637)
// console.log(account)


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Rafa", 10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20)
console.log(companyAccount)

