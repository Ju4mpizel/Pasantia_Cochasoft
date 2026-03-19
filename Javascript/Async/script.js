let promesa1 = new Promise((Response, reject) => {
  setTimeout(() => {
    let resp = {
      Response: 200,
      description: "Esta respuesta es promesa 1",
    };
    Response(resp);
    reject("Fallo");
  }, 3000);
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

async function ejecutarPromesas() {
  let respuestaProm1 = await promesa1;
  console.log(respuestaProm1);
  let respuestaProm2 = await promesa2;
  console.log(respuestaProm2);
  let respuestaProm3 = await promesa3;
  console.log(respuestaProm3);
}

ejecutarPromesas();
