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