import cryptoJs from "crypto-js";
export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("state");
    if (serializedData === null) {
      return undefined; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
    }
    return JSON.parse(serializedData); // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
};

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem("state", serializedData);
  } catch (error) {
    console.log(error);
  }
};

export function encrypt(key, data) {
  let dataEncrypt = cryptoJs.AES.encrypt(data, "").toString();
  localStorage.setItem(key, dataEncrypt);
}

export function decrypt(key) {
  let data = localStorage.getItem(key);
  if (data) {
    var bytes = cryptoJs.AES.decrypt(data, "");
    return bytes.toString(cryptoJs.enc.Utf8);
  } else {
    return null;
  }
}
