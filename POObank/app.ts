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


import { CompanyAccount } from "./class/companyAccount"
import { PeopleAccount } from "./class/peopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount("Rafa", 10, true, 2)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(`Balance: ${peopleAccount.getBalance()}`)

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20, true)
console.log(companyAccount)
companyAccount.deposit(10)
companyAccount.getBalance()
companyAccount.showDeposit()


