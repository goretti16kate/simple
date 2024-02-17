const loginForm = document.getElementById('login');
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    console.log(email);
    console.log(password);
    if (email.length == 0 ) {
        return alert("The email is required")
    } else if (email === "gorettikate@gmail" && password === "password") {
        return alert('Welcome to Prime Bank')
    } else {
        alert("oops, wrong credentials")
    }
})