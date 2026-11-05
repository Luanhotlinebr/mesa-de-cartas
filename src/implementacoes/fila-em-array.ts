import { FilaDeJogadores } from "../contratos/fila-de-jogadores";
import { Jogador } from "../modelos/jogador";

export class FilaEmArray implements FilaDeJogadores {
  private jogadores: Jogador[];
  private primeiro: number;
  private ultimo: number;

  constructor() {
    this.jogadores = new Array<Jogador>();
    this.primeiro = 0;
    this.ultimo = -1;
  }

  entrar(jogador: Jogador): void {
    this.ultimo++;
    this.jogadores[this.ultimo] = jogador;
  }

  proximo(): Jogador {
    if (this.estaVazia()) {
      throw new Error("A fila já está vazia");
    }
    const jogador = this.jogadores[this.primeiro];
    this.primeiro++;
    return jogador;
  }

  estaVazia(): boolean {
    return this.primeiro > this.ultimo;
  }

  tamanho(): number {
    return this.ultimo - this.primeiro + 1;
  }
}
