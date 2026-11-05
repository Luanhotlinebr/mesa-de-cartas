import { EstrategiaDeOrdenacao } from "../contratos/estrategia-de-ordenacao";
import { Carta } from "../modelos/carta";

export class OrdenacaoPorValor implements EstrategiaDeOrdenacao {
  ordenar(cartas: Carta[]): Carta[] {
    const ordenadas: Carta[] = cartas.slice();
    for (let i = 0; i < ordenadas.length - 1; i++) {
      for (let j = i + 1; j < ordenadas.length; j++) {
        if (ordenadas[j].comparar(ordenadas[i]) < 0) {
          const temporaria = ordenadas[i];
          ordenadas[i] = ordenadas[j];
          ordenadas[j] = temporaria;
        }
      }
    }
    return ordenadas;
  }
}
