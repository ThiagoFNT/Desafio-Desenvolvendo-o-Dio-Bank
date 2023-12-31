import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
//Depositando
peopleAccount.deposit(900)
//Sacando
peopleAccount.withdraw(400)
//Chamando atributos de peopleAccount 
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//Depositando
companyAccount.deposit(1000)
//Sacando
companyAccount.withdraw(500)
//Empréstimo
companyAccount.getLoan(15000);
//Chamando atributos de companyAccount 
console.log(companyAccount)


const companyAccountAdd: CompanyAccount = new CompanyAccount('Thiago', 30)
//Depositando
companyAccountAdd.deposit(700)
//Sacando
companyAccountAdd.withdraw(200)
//Empréstimo
companyAccountAdd.getLoan(1000);
//Chamando atributos de companyAccount 
console.log(companyAccountAdd)

