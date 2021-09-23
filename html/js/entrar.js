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
        }
    }
const insereUsuario = async (user) => {
    let resposta = await fetch("/users", 
    {
       method: "POST",
       body: JSON.stringify(user)
    });
}