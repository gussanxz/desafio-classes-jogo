class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marcciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque padrao";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Hero("Gustavo", 36, "mago");
const guerreiro = new Hero("Italo", 23, "guerreiro");

mago.atacar();
guerreiro.atacar();
