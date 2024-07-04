
function replaceName() {
    var name = prompt("Halo, siapakah nama mu?", "");
    document.getElementById("nama").innerText = name
}

// Replace Name
function replaceName() {
    var name = prompt("Masukkan nama kamu ya!", "");
    document.getElementById("nama").innerText = name;
}

document.getElementById("tombol").addeEventListener("click", replaceName);

document.getElementById ('tombol').addEventListener("click", function() {
    replaceName();
})


let nameInput = document.getElementById('name-input')

document.getElementById('kirim').addEventListener("click", function() {
prompt()
})

// function-button
function validateForm() {
    // validate form
    const username = document.getElementById('username').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message-form').value;
    
    //validation
    const eusername = document.getElementById('error-username');
    const ebirthDate = document.getElementById('error-birthDate');
    const egender = document.getElementById('error-gender');
    const emessage = document.getElementById('error-message');

    //input
    const iusername = document.getElementByClassName('iusername');
    const ibirthDate = document.getElementById('ibirthDate');
    const igender = document.getElementById('igender');
    const imessage = document.getElementById('imessage');
    console.log(gender);
    if( username.value == ""){
        eusername.innerHTML = "masukkan nama dulu dong tsay";
        ebirthDate.innerHTML = "";
        egender.innerHTML = "";
        emessage.innerHTML = "";
    }
    
    setSenderUI (username, birthDate, gender, message);
    

    console.log(username);
    console.log(birthDate);
    console.log(gender);
    console.log(message);

    return false;
    
    var name = prompt("Mboten angsal kosong nggeh", "");
    document.getElementById("tombol").addEventListener("click", validateForm)
}

function setSenderUI (name, birthDate, gender, messages) {
    document.getElementById("sender-username").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}