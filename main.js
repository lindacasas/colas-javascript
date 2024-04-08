// Ejercicio 1: Dividir una cola en dos
function splitQueue() {
    const inputQueue = document.getElementById("ex1-input1").value;

    if (inputQueue.trim()==="") {
        alert("Debe ingresar nombres de colores separados por comas");
        document.getElementById("result-ex1").innerHTML = "";
        return;
    }

    const originalQueue = inputQueue.split(",").map(item => item.trim());

    if (originalQueue.length<2 || originalQueue.includes("")) {
        alert("Debe ingresar al menos 2 nombres de colores separados por comas");
        document.getElementById("result-ex1").innerHTML = "";
        return;
    }
    const queue1 = [];
    const queue2 = [];

    for (let i = 0; i < originalQueue.length; i++) {
        if (i % 2 === 0) {
            queue1.push(originalQueue[i]);
        } else {
            queue2.push(originalQueue[i]);
        }
    }

    document.getElementById('result-ex1').innerHTML = `
        Cola original: [${originalQueue.join(', ')}]<br>
        Cola 1: [${queue1.join(', ')}]<br>
        Cola 2: [${queue2.join(', ')}]
    `;
}

document.getElementById("form-ex1").addEventListener("submit", (event) => {
    event.preventDefault();
    splitQueue();
});

function validateInputText(input) {
    const regex = /^[a-zA-Z\s,]*$/;
    let valInput = input.value;
    if (!regex.test(valInput)) {
        input.value = valInput.replace(/[^a-zA-Z\s,]/g, '');
    }
}

// Ejercicio 2: Retirar usuarios sin ticket
function removeUsersWithoutTicket() {
    const queue = [
        { user: 'Pedro', ticket: true },
        { user: 'María', ticket: true },
        { user: 'Juan', ticket: false },
        { user: 'Ana', ticket: true },
        { user: 'Luis', ticket: false },
        { user: 'Laura', ticket: false },
        { user: 'Carlos', ticket: true },
        { user: 'Sofía', ticket: true },
        { user: 'Diego', ticket: true },
        { user: 'Elena', ticket: false },
        { user: 'Andrés', ticket: true },
    ];

    const removedUsers = [];
    const newQueue = [];

    for (let i = 0; i < queue.length; i++) {
        const user = queue[i];
        if (user.ticket) {
            newQueue.push(user);
        } else {
            removedUsers.push(user);
        }
    }

    document.getElementById('result-ex2').innerHTML = `
        <b>Cola inicial:</b><br>[${queue.map(user => user.user).join(', ')}]<br>
        <b>Usuarios retirados:</b><br>[${removedUsers.map(user => user.user).join(', ')}]<br>
        <b>Cola final:</b><br>[${newQueue.map(user => user.user).join(', ')}]
    `;
}

document.getElementById('btn-ex2').addEventListener('click', removeUsersWithoutTicket);
