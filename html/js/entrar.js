import { selectAllUsers, selectUser, insertUser, updateUser } from '../../db/UserController';

var x = document.getElementById("login");
var y = document.getElementById("cadastrar");
var z = document.getElementById("btn");

function cadastrar(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

const insereUsuario = async (user) => {
    let resposta = await fetch("/users", 
    {
       method: "POST",
       body: JSON.stringify(user)
    });
}

function CadastrarDB(){
    let user = {
        Nick: Codenome,
        Email: Email,
        Password: Senha
    };
    insereUsuario(user);
    insertUser({
        Nick: Codenome,
        Email: Email,
        Password: Senha
    })
}