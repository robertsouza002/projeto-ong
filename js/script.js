const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const pagina = link.getAttribute("href");

        if (pagina === "projetos.html" || pagina === "cadastro.html") {

            event.preventDefault();

            window.location.href = pagina;

        }

    });

});


const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const cadastro = {
            nome: formulario.nome.value,
            email: formulario.email.value,
            nascimento: formulario.nascimento.value,
            endereco: formulario.endereco.value,
            cidade: formulario.cidade.value,
            estado: formulario.estado.value,
            cep: formulario.cep.value,
            telefone: formulario.telefone.value,
            cpf: formulario.cpf.value
        };

        let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

        cadastros.push(cadastro);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        alert("Cadastro realizado com sucesso!");

        formulario.reset();

    });

}


const campos = document.querySelectorAll("input, select");

campos.forEach(function(campo) {

    campo.addEventListener("input", function() {

        if (campo.checkValidity()) {
            campo.style.borderColor = "green";
        } else {
            campo.style.borderColor = "red";
        }

    });

});


const menuBotao = document.querySelector(".menu-toggle");

if (menuBotao) {

    menuBotao.addEventListener("click", function() {

        const menu = document.querySelector(".menu");

        menu.classList.toggle("menu-aberto");

    });

}


const projetos = [
    {
        titulo: "Campanha de Alimentos",
        descricao: "Arrecadação e distribuição de alimentos para famílias que precisam de apoio."
    },
    {
        titulo: "Apoio Comunitário",
        descricao: "Realização de atividades e ações sociais para a comunidade."
    },
    {
        titulo: "Voluntariado",
        descricao: "Participação de voluntários em campanhas e atividades comunitárias."
    }
];

const areaProjetos = document.querySelector("#lista-projetos");

if (areaProjetos) {

    projetos.forEach(function(projeto) {

        const card = `
            <article>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;

        areaProjetos.innerHTML += card;

    });

}

const campos = document.querySelectorAll("input, select");

campos.forEach(function(campo) {

    campo.addEventListener("input", function() {

        if (campo.checkValidity()) {
            campo.style.borderColor = "green";
        } else {
            campo.style.borderColor = "red";
        }

    });

});