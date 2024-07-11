
export abstract class Account{
    name: string
    accountNumber: number
    balance: number

    constructor(name?: string, accountNumber?: number, balance?:number){
        this.name = name || "";
        this.accountNumber = accountNumber || 0;
        this.balance = 20
    }

    deposit = (x: number) =>{
        this.balance += x
    }

    withdraw = (x: number) => {
        this.balance -= x
    }

    getBalance = () => {
        console.log(this.balance)
    }

}

