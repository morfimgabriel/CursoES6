class List {
    constructor(){
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}



class TodoList extends List{
    constructor() {
        super(); // chamar o constructor da classe pai
        this.usuario = 'Gabriel'
    }

    mostrarUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostrarUsuario();

// outro exemplo com static
class Matematica {
    // static apenas para retornar algo
    static soma(a, b) {
        return a + b
    }
}

console.log(Matematica.soma(1, 2));




