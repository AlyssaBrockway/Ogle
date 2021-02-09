(function() {
    const txtEmail = document.getElementById("email");
    const txtPassword = document.getElementById("password");
    const signup = document.getElementById("signup");

    //Add signup event
    signup.addEventListener("click", e => {
        //get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
        window.location.replace("home.html");
    });

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log("not logged in");
        }
    })


}());





