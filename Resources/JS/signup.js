const email = document.querySelector("#email").value;
const passowrd = document.querySelector("#password").value;
console.log(email);
console.log(passowrd);

firebase.auth().createUserWithEmailAndPassword(email,password)
    .then ((userCredential) =>{
        var user = userCredential.user;
        const email = document.querySelector("#email").value;
        const passowrd = document.querySelector("#password").value;
        console.log(email);
        console.log(passowrd);
    })
    /*.catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });*/







