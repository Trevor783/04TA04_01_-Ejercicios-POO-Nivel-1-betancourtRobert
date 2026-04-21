class Estudiante {
  constructor(nombre, { notas = [], asistencia = 0 } = {}) {
    if (!nombre) throw new Error("nombre requerido");
    this.#rango(asistencia, "asistencia", 0, 100);

    this.nombre = nombre;
    this.notas = [];
    this.asistencia = asistencia;

    notas.forEach(n => this.agregarNota(n));
  }


  #rango(v, n, min, max) {
    if (!Number.isFinite(v) || v < min || v > max) {
      throw new Error(`${n} debe estar entre ${min} y ${max}`);
    }
  }


  agregarNota(nota) {
    this.#rango(nota, "nota", 0, 10);
    this.notas.push(nota);
  }

  get promedio() {
    if (!this.notas.length) return null;
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }

  get aprobo() {
    return this.promedio >= 5 && this.asistencia >= 75;
  }

  get mejorNota() {
    return this.notas.length ? Math.max(...this.notas) : null;
  }

  resumen() {
    return {
      nombre: this.nombre,
      notas: [...this.notas],
      asistencia: this.asistencia,
      promedio: this.promedio,
      mejorNota: this.mejorNota,
      aprobo: this.aprobo
    };
  }
}
