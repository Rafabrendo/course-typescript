import { Account } from "./account"

export class CompanyAccount extends Account{

    constructor(name?: string, accountNumber?: number, status?: boolean){
        super(name, accountNumber, status)
    }

    getLoan = (x: number): void =>{
        this.setBalance(this.getBalance() + x)
    }

    deposit = (x: number): void => {
        return this.setBalance(this.getBalance() + x)
    }

    showDeposit = ()=>{
        console.log(this.getBalance())
    }


}
