
import { Account } from "./account"

export class PeopleAccount extends Account{
    doc_id: number

    constructor(name?: string, accountNumber?: number, status?: boolean, doc_id?: number){
        super(name, accountNumber, status)
        this.doc_id = doc_id || 0
    }
}