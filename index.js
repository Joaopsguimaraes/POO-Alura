import { ContaCorrente } from "./ContaCorrete.js"
import { Cliente } from "./Cliente.js"

const cliente1 = new Cliente("Ricardo", 11122233309)
const cliente2 = new Cliente("Alice", 88822233309)
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteAlice = new ContaCorrente(1001, cliente2)
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)