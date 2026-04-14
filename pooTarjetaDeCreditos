class TarjetaCredito {
    constructor(titular, saldo, limite, activa) {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
        this.activa = activa;
;
        }

        activar() {
            this.activa = true;
            console.log("La tarjeta está activa");
        }
        desactivar() {
            this.activa = false;
            console.log("La tarjeta está desactivada")
    
        }

        comprar(cantidad) {
    if (!this.activa) {
      console.log("No puedes comprar, la tarjeta está desactivada");
      return;
    }

    if (cantidad <= 0) {
      console.log("Cantidad inválida");
      return;
    }

    if (this.saldo + cantidad > this.limite) {
      console.log("Compra rechazada: supera el límite");
      return;
    }

}


        pagar(cantidad) {
    if (cantidad <= 0) {
      console.log("Cantidad inválida");
      return;
    }

    this.saldo -= cantidad;

    if (this.saldo < 0) {
      this.saldo = 0;
    }

    console.log(`Pago realizado: ${cantidad}€ | Deuda restante: ${this.saldo}€`);
  }

   disponible() {
    return this.limite - this.saldo;
  }

  estado() {
    return `Titular: ${this.titular} | Activa: ${this.activa} | Deuda: ${this.saldo}€ | Disponible: ${this.disponible()}€`;
  }

}

console.log("Creando una tarjeta de crédito para Juan Pérez con un límite de 5000€ y saldo inicial de 1000€");
const tarjeta1 = new TarjetaCredito("Juan Pérez", 1000, 5000, false);
console.log(tarjeta1.estado());
