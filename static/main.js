const conteudo = document.getElementById("conteudo");

function iniciarContador(){
    let i = conteudo.innerText;

    if ( i !== "Iniciar" ){
        let x = parseInt(i);
        x++;
        conteudo.innerHTML = `<p>${x}</p>`
                
    } else {
        conteudo.innerHTML = "<p>0</p>"
    }

    console.log(i);

    setTimeout( iniciarContador , 1000 );
}