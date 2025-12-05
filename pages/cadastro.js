const button = document.querySelector("button")

button.addEventListener("click", sendUser)

async function sendUser(event) {
    event.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (name === "" || email === "" || password === "") {
        alert("Preencha todas as informações!")
        return
    }

    const user = {
        name,
        email,
        password
    }

    const response = await fetch("https://projetocorpo-em-acao.vercel.app/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)
    window.location.href = "../index.html"
}