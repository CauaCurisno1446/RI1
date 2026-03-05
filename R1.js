const capitao = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const homemFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "",
    velocidade: 70,
    forca: 85,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "",
    armaSecundaria: "",
    velocidade: 90,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const thor = {
    nome: "Thor",
    codinome: "Thor",
    armaPrincipal: "Martelo",
    armaSecundaria: "",
    velocidade: 75,
    forca: 95,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const viuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Pistola",
    armaSecundaria: "Bastão",
    velocidade: 90,
    forca: 80,
    resistencia: 60,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const gaviaoArqueiro = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e Flecha",
    armaSecundaria: "",
    velocidade: 60,
    forca: 70,
    resistencia: 60,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}

const thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada",
    velocidade: 60,
    forca: 95,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Nível de velocidade: " + this.velocidade + "\n" +
        "Nível de força: " + this.forca + "\n" +
        "Nível de resistência: " + this.resistencia + "\n"
    }
}


let personagens = [capitao, homemFerro, hulk, thor, viuvaNegra, gaviaoArqueiro, thanos]

compararComVilao = () => {
    const vilao = personagens.find(vilao => vilao.nome === "Thanos")
    console.log("COMPARANDO HERÓIS CONTRA O VILÃO")
    console.log(" ")
    personagens.forEach(heroi =>{
        console.log("Dados do herói: ")
        console.log(heroi.descricao())
        console.log(" ")
        console.log("Dados do vilão: ")
        console.log(vilao.descricao())
        if(heroi.nome !== vilao.nome){
            console.log(`Comparando atributos de ${heroi.codinome} e ${vilao.nome}!`)
            for(let atributo in heroi){
                if(atributo !== "nome" && atributo !== "codinome" && atributo !== "armaPrincipal" && atributo !== "armaSecundaria"){
                    if(heroi[atributo] > vilao[atributo]){
                        console.log(`${heroi.codinome} vence ${vilao.nome} em ${atributo}`)
                    }
                    else if(heroi[atributo] < vilao[atributo]){
                        console.log(`${vilao.nome} vence em ${atributo}`)
                    }
                    else if(heroi[atributo] === vilao[atributo]){
                        console.log(`${heroi.codinome} e ${vilao.nome} empatam em ${atributo}`)
                    }
                }
            }
            console.log(" ")
        }
    })
}


console.log(compararComVilao())

