import { PilhaDeCartas } from "../contratos/pilha-de-cartas";
import { Carta } from "../modelos/carta";

class PilhaEmArray implements PilhaDeCartas {
  empilhar(carta: Carta): void {}
  desempilhar(): Carta {}
  topo(): Carta {}

  estaVazia(): boolean {}
  tamanho(): number {}
}
