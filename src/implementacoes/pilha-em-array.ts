import { PilhaDeCartas } from "../contratos/pilha-de-cartas";
import { Carta } from "../modelos/carta";

export class PilhaEmArray implements PilhaDeCartas {
  private cartas: Carta[];
  private tampa: number;

  constructor() {
    this.cartas = new Array<Carta>();
    this.tampa = -1;
  }

  empilhar(carta: Carta): void {
    this.tampa++;
    this.cartas[this.tampa] = carta;
  }

  desempilhar(): Carta {
    if (this.estaVazia()) {
      throw new Error("A lista já está vazia");
    }
    const carta = this.cartas[this.tampa];
    this.tampa--;
    return carta;
  }
  topo(): Carta {
    if (this.estaVazia()) {
      throw new Error("A lista já está vazia");
    }
    return this.cartas[this.tampa];
  }

  estaVazia(): boolean {
    return this.tampa == -1;
  }
  tamanho(): number {
    return this.tampa + 1;
  }
}
