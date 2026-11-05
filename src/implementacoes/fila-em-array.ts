import { FilaDeJogadores } from "../contratos/fila-de-jogadores";
import { Jogador } from "../modelos/jogador";

class FilaEmArray implements FilaDeJogadores {
  entrar(jogador: Jogador): void {}
  proximo(): Jogador {}
  estaVazia(): boolean {
    return true;
  }

  tamanho(): number {}
}
