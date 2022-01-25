const registroformulario= document.querySelector("#signup-form");
const ingresoformulario= document.querySelector("#IngresoEmailForm");
//registro
registroformulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = registroformulario["signup-email"].value;
    const password = registroformulario["signup-password"].value;
  
    // Authenticate the User
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // clear the form
        registroformulario.reset();
        // close the modal
        $("#signupModal").modal("hide");
        console.log("registrado");
      });
  });

//Salir
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("salistes de tu cuenta");
  });
});

//Ingreso

ingresoformulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = ingresoformulario["IngresoEmail"].value;
    const password = ingresoformulario["ingresoPassword"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    ingresoformulario.reset();
    console.log("logeado");
  });
});

// Login with Google
const googleButton = document.querySelector("#btnIngresoGmail");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  ingresoformulario.reset();


  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
}); 
const formularioPost= document.querySelector("#contenidoWeb");
const btnsalir= document.querySelector("#logout")
// eventos
// cambio de estado de autentificacion
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("logeado");
      /*fs.collection("posts")
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
          loginCheck(user);
        });*/
     btnsalir.style.display="block";
     formularioPost.style.display="block";
    } else {
      console.log("no has ingresado");
      //setupPosts([]);
      //loginCheck(user);
      formularioPost.style.display="none";
      btnsalir.style.display="none";
    }
  }); 

  //guardar post
  
  var mensaje = document.getElementById('postText').value;
  var post = firebase.firestore();
  var btnmensaje=document.getElementById("btnSendPost");
  btnmensaje.addEventListener("click", (e) => {
    e.preventDefault();
  
    post.collection("post").add({
      contenido: mensaje,
    })
    .then(function(){
      console.log("documentoguardado");
    })
    .catch(function(error){
      console.error("erroralguardar",error);
    })
  });    
  