// Função de exibição do erro
function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.innerText = mensagem;
    erroDiv.style.color = 'red';
}

function criarFuncionarios() {
    try {
        throw new Error("Erro ao criar funcionário.");
    } catch (error) {
        exibirErro(error.message);
    }
}

// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function criarFuncionarios() {
    try {
        const nomeGerente = document.getElementById('nomeGerente').value;
        const idadeGerente = parseInt(document.getElementById('idadeGerente').value);
        const departamentoGerente = document.getElementById('departamentoGerente').value;

        const nomeDev = document.getElementById('nomeDev').value;
        const idadeDev = parseInt(document.getElementById('idadeDev').value);
        const linguagemDev = document.getElementById('linguagemDev').value;

        if (!nomeGerente || isNaN(idadeGerente) || !departamentoGerente) {
            throw new Error("Por favor, preencha todos os campos do gerente corretamente.");
        }

        if (!nomeDev || isNaN(idadeDev) || !linguagemDev) {
            throw new Error("Por favor, preencha todos os campos do desenvolvedor corretamente.");
        }

        const gerente = new Gerente(nomeGerente, idadeGerente, 'Gerente', departamentoGerente);
        const desenvolvedor = new Desenvolvedor(nomeDev, idadeDev, 'Desenvolvedor', linguagemDev);

        document.getElementById('resultado').innerHTML += `<p>${gerente.seApresentar()}</p>`;
        document.getElementById('resultado').innerHTML += `<p>${gerente.gerenciar()}</p>`;
        document.getElementById('resultado').innerHTML += `<p>${desenvolvedor.seApresentar()}</p>`;
        document.getElementById('resultado').innerHTML += `<p>${desenvolvedor.programar()}</p>`;

    } catch (error) {
        exibirErro(error.message);
    }
}