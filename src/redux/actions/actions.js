import axios from "axios";
import {
  DOMAIN,
  LOGIN_URL,
} from "./url.js";
import {
  DATA_LOGIN,
  DATA_PAYMENTS_TEMP,
} from "./const";
import { toast } from "sonner";

//Login auth
// export const login = (data, navigate) => {
//   return async (dispatch) => {
//     const url = `${DOMAIN}${LOGIN_URL}`;
//     try {
//       const response = await axios.post(url, data);
//       if (response.data.code === 200) {
//         toast.success(`${response.data.message} Bienvenido 😊✨✨✨`, { position: 'bottom-center', duration: 3000 });
//         setTimeout(() => {
//           localStorage.setItem("userLogged", "active");
//           navigate("/inicio");
//         }, 2500)
//       }
//       dispatch({
//         type: DATA_LOGIN,
//         payload: { data: response.data.user, error: null },
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response ? error.response.data.message : error.message);
//       //alert(error.response ? error.response.data.message : error.message);
//       localStorage.removeItem("persist:persist");
//       localStorage.removeItem("state");
//       localStorage.setItem("userLogged", "inactive");
//       dispatch({
//         type: DATA_LOGIN,
//         payload: {
//           data: null,
//           error: error.response ? error.response.data : error.message,
//         },
//       });
//     }
//   };
// };
