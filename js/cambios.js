$(document).ready(function () {

    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyBBrLD9ABrVRC1ogk0NSxhopf5EpdORpIA",
      authDomain: "proyecto-5-42b67.firebaseapp.com",
      projectId: "proyecto-5-42b67",
      storageBucket: "proyecto-5-42b67.appspot.com",
      messagingSenderId: "920845703750",
      appId: "1:920845703750:web:749126056ec66350928847",
      measurementId: "G-GRB26TSD38"
    };
     
  
      //Inicializar firebase
      firebase.initializeApp(firebaseConfig);
  
      //Inicializar servicio de autenticación
      const auth = firebase.auth();
  
      var provider = new firebase.auth.GoogleAuthProvider();
      //Iniciar sesión con Google
      $("#btn-login-google").click(function (e) {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                alert("Ingreso con Google");
            })
            .catch(error => {
                alert(error);
            })
    })
  
    auth.onAuthStateChanged((user) => {
        if (user) {
            //Sesión iniciada
            $("#login-container").hide();
            $("#ingresar").hide();
            $("#content").show();
            readPosts();
        }
        else {
            //Sesión finalizada
            $("#content").hide();
            $("#login-container").show();
        }
    })

     //Ingresar con Facebok
     $("#btn-login-facebok").click(function (e) {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                alert("Ingreso con Facebok");
            })
            .catch(error => {
                alert(error);
            })
    })

    auth.onAuthStateChanged((user) => {
        if (user) {
            //Sesión iniciada
            $("#login-container").hide();
            $("#ingresar").hide();
            $("#content").show();
            readPosts();
        }
        else {
            //Sesión finalizada
            $("#content").hide();
            $("#login-container").show();
        }
    })
});