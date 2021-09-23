import { selectAllUsers, selectUser, insertUser, updateUser } from '../../db/UserController'

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

function LoginDB(){
    var Usuario = selectUser(Codenome)
    if (Senha == Usuario.Senha){
        alert("Login Realizado com sucesso!")
    }
}

function CadastrarDB(){
    var Usuarios = selectAllUsers();
    
    if (Codenome in Usuarios.Nick){
        alert("Codenome já cadastrado!");
    }
    else{
        if (Email in Usuarios.Email){
            alert("Email já cadastrado!");
        }
        else{
            insertUser({
            Nick: Codenome,
            Email: Email,
            Password: Senha
    })
        }
    }
}