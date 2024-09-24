class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido'; // Caso o tipo não esteja listado
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Usos:
  const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  
  const heroi2 = new Heroi('Merlin', 150, 'mago');
  heroi2.atacar(); // Saída: O mago atacou usando magia
  