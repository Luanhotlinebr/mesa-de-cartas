import { FormatadorDeCarta } from "../contratos/formatador-de-carta";
import { Carta } from "../modelos/carta";
import { NAIPES } from "../modelos/carta";
// Transforma uma carta em texto curto para exibição.
// Formato: rótulo do valor + símbolo do naipe, sem espaço.
//   Rótulo: 1 = A,
//   2 a 10 = o próprio número,
//   11 = J, 12 = Q, 13 = K.
//   Naipe:  Copas = ♥, Espadas = ♠, Ouros = ♦, Paus = ♣.
// Exemplos: Ás de Copas = "A♥", 10 de Espadas = "10♠",
//           Dama de Ouros = "Q♦", Rei de Paus = "K♣".
//["Ouros", "Espadas", "Copas", "Paus"];

class FormatadorCompacto implements FormatadorDeCarta {
  constructor(private carta: Carta) {
    this.carta = carta;
  }
  formatar(carta: Carta): string {
    let valorFormatado: string = "";
    let tipoNaipe: string = "";

    if (carta.valor === 1) {
      return "A";
    } else if (carta.valor >= 2 && carta.valor <= 10) {
      valorFormatado = String(carta.valor);
    } else if (carta.valor === 11) {
      valorFormatado = "J";
    } else if (carta.valor === 12) {
      valorFormatado = "Q";
    } else if (carta.valor === 13) {
      valorFormatado = "K";
    }
    if (carta.naipe === "Ouros") {
      tipoNaipe = "♦";
    } else if (carta.naipe === "Espadas") {
      tipoNaipe = "♠";
    } else if (carta.naipe === "Copas") {
      tipoNaipe = "♥";
    } else {
      tipoNaipe = "♣";
    }
    return valorFormatado + tipoNaipe;
  }
}
