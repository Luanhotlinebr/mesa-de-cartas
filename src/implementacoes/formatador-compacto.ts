import { FormatadorDeCarta } from "../contratos/formatador-de-carta";
import { Carta } from "../modelos/carta";

class FormatadorCompacto implements FormatadorDeCarta {
  formatar(carta: Carta): string {
    return "valete";
  }
}
