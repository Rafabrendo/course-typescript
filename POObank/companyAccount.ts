import { Account } from "./account"

export class CompanyAccount extends Account{

    constructor(name?: string, accountNumber?: number){
        super()
    }

    getLoan = () =>{
        console.log('Você pegou um empréstimo')
    }
}
