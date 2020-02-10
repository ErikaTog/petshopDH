const MARCA = "PETSHOP DH";

console.log(`****** ${MARCA} ******`);

//*** Início base de dados dos animais.
let petsDados = [{
    nome: "Lilica",
    tipo: "cachorro",
    raca: "Yorkshire",
    idade: 9,
    genero: "F",
    vacinado: true,
    servicos: ["vacina", "consulta", "tosa"]
}, {
    nome: "Tom",
    tipo: "gato",
    raca: "SRD",
    idade: 5,
    genero: "M",
    vacinado: true,
    servicos: ["vacina", "consulta"]
}, {
    nome: "Cabecinha",
    tipo: "cachorro",
    raca: "SRD",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: ["vacina", "corte de unha"]
}, {
    nome: "Titi",
    tipo: "cachorro",
    raca: "maltes",
    idade: 1,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "tosa"]
}];
//fim da base de dados dos animais***


// ***Verificando o ano de nascimento do Pet
const anoNasc = pet => {
    var nasc = new Date().getFullYear() - pet.idade;
    return console.log(`Consulta Ano de Nascimento: ${pet.nome} nasceu em ${nasc} e tem ${pet.idade} ano(s).`);
};
//anoNasc(petsDados[0]);
//término da função anoNasc***


//***Incluindo serviços e início da função atenderPet
const tosarPet = pet => {
    pet.servicos.push('tosa');
    console.log(`${pet.nome} está com pelinhos aparados!`)
};

const darBanhoPet = pet => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} tomou um banho espumado e relaxante!`)
};

const cortarUnhaPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(`${pet.nome} está com as garrinhas aparadas!`)
};

const consultaPet = pet => {
    pet.servicos.push("consulta");
    console.log(`${pet.nome} passou por uma consulta!`)
};

// tosarPet(petsDados[0]); exemplo de como incluir um dos serviços

const atenderPet = (pet, ...servicos) => {  // Por ex: pet vai ser a posição e os servicos os callbacks -> petsDados[0], darBanhoPet, cortarUnhaPet, etc
    console.log(`Bem-vindo(a) ${pet.nome}!`);
    for (let servico of servicos)
        servico(pet); // Por ex: aqui o servico vai ser um callback indicado e o pet a posição ->  darBanhoPet(petsDados[0]) 
    console.log(`Pagamento realizado com sucesso! O ${MARCA} agradece a preferência!`)
};

// atenderPet(petsDados[0], darBanhoPet, cortarUnhaPet);
// fim de atenderPet***


//*** Início da função que lista todos os pets.
let listarPets = (bancoDados) => {
    for (let animal of bancoDados) {
        console.log("------------------------");
        for (let prop in animal) {
            if (prop == "genero") {
                console.log(`${prop}: ${animal[prop] == "F" ? "fêmea" : "macho"}`)
            } else if (prop == "vacinado") {
                console.log(`${prop}: ${animal[prop] == true ? "sim" : "não"}`)
            } else {
                console.log(`${prop}: ${animal[prop]}`);
            };
        };
    };
};

//listarPets(petsDados);
//Fim da função listar pets***

//*** Início da função buscar pelo nome
let buscarPeloNome = nome => {
    let infoPet = petsDados.filter(pet => {
        return pet.nome == nome;
   });
    if (infoPet.length == 0){
        console.log("Pet não localizado.");
    } else {
        console.log(`Abaixo estão os dados do pet: ${nome}.`);
        listarPets(infoPet);
    };     
};

//buscarPeloNome("Lilica");
//Fim da função buscarPeloNome***


//***Contando os pets vacinados e não vacinados com a função contarVacinados
const contarVacinados = () => {
    let vacinados = petsDados.filter(pet => pet.vacinado).length;
    let naoVacinados = petsDados.filter(pet => !pet.vacinado).length;

    console.log(`
    ---------------------   
    Temos ${vacinados} pet(s) vacinado(s).
    Temos ${naoVacinados} pet(s) não vacinado(s).
    ---------------------
    `);
};

//contarVacinados();
//Fim de contarVacinados***

//***Início da função vacinarPet que verifica e vacina o pet, se necessário
const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} recebeu a vacina com sucesso!Ehhh!!!`)
    } else {
        console.log(`${pet.nome} já tinha recebido a vacina!`)
    };
};

//vacinarPet(petsDados[0]);
//Fim da função vacinarPet***


//***Início função campanhaVacina: verifica todos os pets, vacina quem for necessário, diz quantos foram vacinados e os nomes
const campanhaVacina = () => {
    console.log("Campanha Vacina 2020\nVacinando...");
    let petVacinadosCampanha = 0;
    let nomesPets = []
    for (let pet of petsDados) {
        if (!pet.vacinado) {
            vacinarPet(pet), nomesPets.push(pet.nome), petVacinadosCampanha++;
        };
    };
    console.log(`Total de pets vacinados nessa campanha:${petVacinadosCampanha}`);
    console.log(`Nome dos pets vacinados: ${nomesPets}`);
};
//campanhaVacina();
//Fim da função campanhaVacina***

//***Início do processo de adicionar um novo pet.
// 1- Verificando se existem os dados dentro do novo pet
const validarDados = (dados) => {
    return (
        dados.nome &&
        dados.idade &&
        dados.genero &&
        dados.tipo &&
        dados.raca
    );
};

//2- validando e alterando tipos para incluir na lista.
const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        };
        petsDados.push(novoPet);
        console.log(`${novoPet.nome} foi adicionado/a com sucesso!`);
    } else {
        console.log("Ops, insira um objeto válido!");
    };
};

//3-Criando uma variável com um novo pet
let costelinha = {
    nome: "Costelinha",
    tipo: "cachorro",
    raca: "beagle",
    idade: "10",
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
};

//adicionarPet(costelinha);
//Fim de adicionarPet***

