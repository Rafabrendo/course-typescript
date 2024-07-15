import { Account } from "./account"

export class CompanyAccount extends Account{

    constructor(name?: string, accountNumber?: number){
        super(name, accountNumber)
    }

    getLoan = () =>{
        console.log('Você pegou um empréstimo')
    }

    deposit = (x: number): void => {
        return this.setBalance(this.getBalance() + x)
    }

    showDeposit = ()=>{
        console.log(this.getBalance())
    }
}
