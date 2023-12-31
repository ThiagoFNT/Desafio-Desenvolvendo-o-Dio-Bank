import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    if(this.getStatus()){
      if(loanAmount > 0) {
        this.balance = loanAmount + this.balance
        console.log(`Você retirou R$ ${loanAmount} de empréstimo.`)
        console.log(`Seu saldo atual é de R$ ${this.balance}`)
      }
    }
  }
  
}


