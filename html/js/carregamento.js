const insereUsuario = async (user) => {
    let resposta = await fetch("/users", 
    {
       method: "POST",
       body: JSON.stringify(user)
    });
}

function carregamento() {
    let user = {
        Nick: 'Matheus',
        Email: 'xya@',
        Password: '1234'
    };
    insereUsuario(user);
    alert("A PÁGINA FOI CARREGADA COM SUCESSO!\nCLIQUE NA LOGO PARA ADENTRAR NO HTML APÓS FECHAR ESSA MENSAGEM!\nALGUNS EVENTOS INCLUSOS NESTE HTML:\nONLOAD, ONMOUSEOVER, ONMOUSEOUT E ONCLICK. ")
}