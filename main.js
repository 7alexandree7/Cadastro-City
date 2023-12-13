
function configurarInteracao(elementos) {

    const { botaoExit, login, botaoHamburguer, formulario, logoTema, botaoForm} = elementos;


    function formularioAction() {
        botaoExit.addEventListener("click", () => {
            formulario.classList.add("none");
        });



        login.addEventListener("click", () => {
            formulario.classList.remove("none");
        });


    }

    function menuHamburguerAction() {

        botaoHamburguer.addEventListener("click", () => {
            const listboxmob =  window.document.querySelector(".listboxmob")

            if (formulario.classList.contains("none")) {
                formulario.classList.remove("none");
                
            }

        });
    }



    function alterarTema() {

        const html = document.documentElement;
        const body = document.body;
        html.classList.toggle("dark");

        if (!html.classList.contains("dark")) {
            logoTema.textContent = "Hy Dark";


            body.style.backgroundImage = "url('background/pexels-david-iglesias-13602331.jpg')";
        } 


        else {
            logoTema.textContent = "Hy Light";
            body.style.backgroundImage = "url('background/pexels-gever-8189405.jpg')";
        }



    }



    function enviarForm (evento) {
        
        evento.preventDefault();

        const pessoas = []

        const nome = window.document.querySelector("#nome");
        const sobreNome = window.document.querySelector("#sobrenome");
        const idade = window.document.querySelector("#idade");
        const altura = window.document.querySelector("#altura");


        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            idade: idade.value,
            altura:altura.value
        })

        console.log(pessoas)

    }
 

    logoTema.addEventListener("click", alterarTema);
    botaoForm.addEventListener("click", enviarForm);

    // Chame as funções de ação aqui
    formularioAction();
    menuHamburguerAction();
    enviarForm(evento);
}


// Selecione os elementos
const elementos = {
    botaoExit: window.document.querySelector(".exit"),
    login: window.document.querySelector(".active"),
    botaoHamburguer: window.document.querySelector(".btn-header"),
    formulario: window.document.querySelector(".form-box"),
    logoTema: window.document.querySelector(".logo"),
    botaoForm: window.document.querySelector(".sbt")
};



// Configure as interações
configurarInteracao(elementos);
