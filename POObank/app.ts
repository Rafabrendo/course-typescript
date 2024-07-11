//Dio Banking


//name, accountNumber
//depositar, sacar

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


import { CompanyAccount } from "./companyAccount"
import { PeopleAccount } from "./peopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Rafa", 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(`Balance: ${peopleAccount.getBalance()}`)

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20)
console.log(companyAccount)

