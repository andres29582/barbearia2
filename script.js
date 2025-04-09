const database = [
    { usuario: "andres", password: "12345" },
    { usuario: "maria", password: "password1" },
    { usuario: "admin", password: "admin123" }
];

// pega as informaçoes do formulario
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // evita que a pagina recarregue automaticamente 

    // os dados guardados em varivaies 
    const usuarioInput = document.getElementById("usuario").value;
    const passwordInput = document.getElementById("password").value;

    // verificaçao que exista no banco de dados
    const usuarioEncontrado = database.find(
        (entry) => entry.usuario === usuarioInput && entry.password === passwordInput
    );
    
    //DESICAO;
    if (usuarioEncontrado) {
        window.location.href = "principal.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
    }
});
