const menuBotao = document.querySelector(".menu-toggle");

if (menuBotao) {

    menuBotao.addEventListener("click", function() {

        const menu = document.querySelector(".menu");

        menu.classList.toggle("menu-aberto");

    });

}