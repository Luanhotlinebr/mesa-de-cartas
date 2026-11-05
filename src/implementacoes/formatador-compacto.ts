import { FormatadorDeCarta } from "../contratos/formatador-de-carta";
import { Carta } from "../modelos/carta";

export class FormatadorCompacto implements FormatadorDeCarta {
  formatar(carta: Carta): string {
    let valorFormatado: string = "";
    let tipoNaipe: string = "";

    if (carta.valor === 1) {
      valorFormatado = "A";
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
