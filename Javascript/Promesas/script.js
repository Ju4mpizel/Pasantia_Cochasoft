let promesa = new Promise((Response, reject) => {
  /*let resp ={
    Response: 200,
    description: "Esta es la respuesta del servicio"
  };
  Response(resp);
  reject("Fallo");*/

  //Esto funciona como asincrono, no como el trycatch que no funciona
  setTimeout(() => {
    let resp = {
      Response: 200,
      description: "Esta es la respuesta del servicio",
    };
    Response(resp);
    reject("Fallo");
  }, 3000);
});
//Como verificar la promesa
promesa
  .then((res) => {
    console.log(res.description);
  })
  .catch((error) => {
    console.log(error);
  });

// Definicion de varias promesas
let promesa1 = new Promise((Response, reject) => {
  setTimeout(() => {
    let resp = {
      Response: 200,
      description: "Esta respuesta es promesa 1",
    };
    Response(resp);
    reject("Fallo");
  }, 5000);
});
let promesa2 = new Promise((Response, reject) => {
  setTimeout(() => {
    let resp = {
      Response: 200,
      description: "Esta respuesta es mas lenta promesa 2",
    };
    Response(resp);
    reject("Fallo");
  }, 5000);
});
let promesa3 = new Promise((Response, reject) => {
  setTimeout(() => {
    let resp = {
      Response: 200,
      description: "Esta es la mas rapida promesa 3",
    };
    Response(resp);
    reject("Fallo");
  }, 2500);
});
// Mala practica de correr promesas
promesa1
  .then((res) => {
    console.log(res.description);
    promesa2
      .then((res) => {
        console.log(res.description);
        promesa3
          .then((res) => {
            console.log(res.description);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
