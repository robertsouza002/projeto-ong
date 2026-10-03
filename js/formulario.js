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