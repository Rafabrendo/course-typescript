
export abstract class Account{
    private name: string
    private readonly accountNumber: number
    private balance: number
    status: boolean = true

    constructor(name?: string, accountNumber?: number, balance?:number){
        this.name = name || "";
        this.accountNumber = accountNumber || 0;
        this.balance = 20
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

    withdraw = (): void => {
        console.log('Você sacou')
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

