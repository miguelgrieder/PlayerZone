import { selectAllUsers, selectUser, insertUser, updateUser } from '../../db/UserController';


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