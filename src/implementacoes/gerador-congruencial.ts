import { GeradorAleatorio } from "../contratos/gerador-aleatorio";

export class GeradorCongruencial implements GeradorAleatorio {
  private estado: number;

  constructor(private semente: number) {
    if (this.semente < 1 || this.semente > 2147483647) {
      throw new Error("Semente invalida");
    }

    this.estado = this.semente;
  }

  proximoInteiro(limite: number): number {
    if (!Number.isInteger(limite) || limite < 1) {
      throw new Error("Limite invalido");
    }
    this.estado = (this.estado * 16807) % 2147483647;
    let resultado = this.estado % limite;
    return resultado;
  }
}
