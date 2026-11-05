import { FormatadorDeCarta } from "../contratos/formatador-de-carta";
import { Carta } from "../modelos/carta";

// Transforma uma carta em texto curto para exibição.
// Formato: rótulo do valor + símbolo do naipe, sem espaço.
//   Rótulo: 1 = A, 2 a 10 = o próprio número,
//   11 = J, 12 = Q, 13 = K.
//   Naipe:  Copas = ♥, Espadas = ♠, Ouros = ♦, Paus = ♣.
// Exemplos: Ás de Copas = "A♥", 10 de Espadas = "10♠",
//           Dama de Ouros = "Q♦", Rei de Paus = "K♣".

class FormatadorCompacto implements FormatadorDeCarta {
  formatar(carta: Carta): string {
    if (carta.valor === 1) {
      return "A";
    } else if (carta.valor >= 2 || carta.valor <= 10) {
      return String(carta.valor);
    } else if (carta.valor === 11) {
      return "J";
    } else if (carta.valor === 12) {
      return "Q";
    } else if (carta.valor === 13) {
      return "K";
    } else {
      return String(carta.valor);
    }
  }
}
