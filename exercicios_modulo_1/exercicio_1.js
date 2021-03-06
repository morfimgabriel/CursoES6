class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = 'false';
    }
    isAdmin() {
        return this.admin
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super();
        this.admin = 'true';
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(adm1.isAdmin());