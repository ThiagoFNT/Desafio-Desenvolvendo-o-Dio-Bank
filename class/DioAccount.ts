export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount > 0){
        const enhancedAmount = amount + 10;
        this.balance += enhancedAmount
        console.log(`Voce depositou R$ ${amount}.`)
      } else {
          console.log('O valor do depositado deve ser maior que  R$ 0.')
      }
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if(this.balance >= amount && amount > 0){
        this.balance -= amount
        console.log(`Saque de R$ ${amount} realizado com sucesso, seu valor atual é de R$ ${this.balance}.`)
      } else if(amount > this.balance){
        console.log('Saldo insuficiente para realizar o saque.')
      } else {
        console.log('Valor do saque deve ser maior que R$ 0.')
      }
    }
  }


  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  // pegando status
  getStatus (): boolean {
    return this.status
  }
}
