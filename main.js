const btn_menu = document.querySelector("#menu-arrow")
const submenu = document.querySelector("#submenu")
const menu_links = document.querySelectorAll("#submenu a")

let isClosed = true

// Parte do código foi feito na aula 5, atualizei um pouco
 
btn_menu.addEventListener("click", () => {

    if(isClosed)
    {
        submenu.style.height = "100px"
        submenu.style.opacity = "1"
        submenu.style.marginBottom = "30px"

        // Colocar delay nos links para a div abrir antes deles aparecerem
        menu_links.forEach(element => {
            element.style.transitionDelay = "0.7s"
            element.style.opacity = "1"
        }); 
    }
    else
    {         
        // Colocar delay na div para os links desaparecerem antes de fechar       
        submenu.style.transitionDelay = "0.2s"
        submenu.style.height = "0"
        submenu.style.opacity = "0"
        submenu.style.marginBottom = "0"
        
        menu_links.forEach(element => {
            element.style.transitionDelay = "0s"
            element.style.opacity = "0"
        });   
    }

    isClosed = !isClosed

})

const imagem = document.querySelector("#imagem")
const btn_azul = document.querySelector("#color-azul")
const btn_estelar = document.querySelector("#color-estelar")
const btn_preto = document.querySelector("#color-preto")
const btn_rosa = document.querySelector("#color-rosa")
const btn_silver = document.querySelector("#color-silver")


// CÓDIGO ESPERADO

/* 

btn_azul.addEventListener("click", () => {
    imagem.src = "src/Azul.png"  
})
btn_estelar.addEventListener("click", () => {
    imagem.src = "src/Estelar.png"
})
btn_preto.addEventListener("click", () => {
    imagem.src = "src/Preto.png"
})
btn_rosa.addEventListener("click", () => {
    imagem.src = "src/Rosa.png"
})
btn_silver.addEventListener("click", () => {
    imagem.src = "src/Silver.png"
})

*/

// CÓDIGO MELHORADO

btn_azul.addEventListener("click", () => {
    Efeito(imagem, "src/Azul.png")
})
btn_estelar.addEventListener("click", () => {
    Efeito(imagem, "src/Estelar.png")
})
btn_preto.addEventListener("click", () => {
    Efeito(imagem, "src/Preto.png")
})
btn_rosa.addEventListener("click", () => {
    Efeito(imagem, "src/Rosa.png")
})
btn_silver.addEventListener("click", () => {
    Efeito(imagem, "src/Silver.png")
})

// Função para Fade-in-out

function Efeito(imagem, fonte)
{
    imagem.style.opacity = 0;

    // Define o que acontece ao carregar a nova imagem
    imagem.onload = () => {
        imagem.style.opacity = 1;
    };

    // Troca a imagem após um pequeno delay (evita problemas de carregamento instantâneo)
    setTimeout(() => {
        imagem.src = fonte;
    }, 300);
}
