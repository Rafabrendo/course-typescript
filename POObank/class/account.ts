
export abstract class Account{
    private name: string
    private readonly accountNumber: number
    private balance: number
    status: boolean 

    constructor(name?: string, accountNumber?: number, status?: boolean, balance?:number){
        this.name = name || "";
        this.accountNumber = accountNumber || 0;
        this.balance = 20
        this.status = status || false;
    }

    getName = (): string => {
        return this.name
    }

    setName = (name: string): void => {
        this.name = name
    }

    deposit = (x: number): void =>{
        if(this.validateStatus()){
            console.log(`Você depositou: ${x}`)
        }
    }

    withdraw = (x:number): number => {
        return this.balance  -= x
    }

    getBalance = (): number => {
        return this.balance

    }

    setBalance = (x: number) =>{
        this.balance = x
    }

    private validateStatus = (): boolean =>{
        if(this.status){
            return this.status
        }
        throw new Error()
    }
}

