class Poligono {

  constructor(lados, longitudLado, apotema = null, altura = null) {
    this.#validarEntero(lados, "lados", 3);
    this.#validarPositivo(longitudLado, "longitudLado");

    if (apotema !== null) this.#validarPositivo(apotema, "apotema");
    if (altura !== null) this.#validarPositivo(altura, "altura");

    this.lados = lados;
    this.longitudLado = longitudLado;
    this.apotema = apotema;
    this.altura = altura;
  }


  #validarPositivo(valor, nombre) {
    if (!Number.isFinite(valor) || valor <= 0) {
      throw new Error(`"${nombre}" debe ser un número positivo. Recibido: ${valor}`);
    }
  }

  #validarEntero(valor, nombre, min = 1) {
    this.#validarPositivo(valor, nombre);

    if (!Number.isInteger(valor)) {
      throw new Error(`"${nombre}" debe ser un número entero. Recibido: ${valor}`);
    }

    if (valor < min) {
      throw new Error(`"${nombre}" debe ser al menos ${min}. Recibido: ${valor}`);
    }
  }

  perimetro() {
    return this.lados * this.longitudLado;
  }

  area() {
    if (this.apotema === null) {
      throw new Error("No se puede calcular el área: falta la apotema.");
    }
    return (this.perimetro() * this.apotema) / 2;
  }

  volumen() {
    if (this.altura === null) {
      throw new Error("No se puede calcular el volumen: falta la altura.");
    }
    if (this.apotema === null) {
      throw new Error("No se puede calcular el volumen: falta la apotema.");
    }
    return this.area() * this.altura;
  }

  tipo() {
    const nombres = {
      3: "Triángulo",
      4: "Cuadrilátero",
      5: "Pentágono",
      6: "Hexágono",
      7: "Heptágono",
      8: "Octágono",
      9: "Eneágono",
      10: "Decágono",
      11: "Endecágono",
      12: "Dodecágono",
    };
    return nombres[this.lados] ?? `Polígono de ${this.lados} lados`;
  }

  resumen() {
    const perimetro = this.perimetro();

    let area = null;
    let volumen = null;

    if (this.apotema !== null) {
      area = (perimetro * this.apotema) / 2;
    }

    if (this.altura !== null && area !== null) {
      volumen = area * this.altura;
    }

    return {
      tipo: this.tipo(),
      lados: this.lados,
      longitudLado: this.longitudLado,
      perimetro,
      apotema: this.apotema,
      altura: this.altura,
      area,
      volumen,
    };
  }

  toString() {
    return `${this.tipo()} (lados: ${this.lados}, lado: ${this.longitudLado})`;
  }
}
