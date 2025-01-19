import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "./redux/store/store";
import RoutesComponent from "./routes/index";
import { Toaster } from "sonner";

function App() {

  return (
    <Router>
      {/*       <Provider store={store}> */}
      <RoutesComponent />
      <Toaster richColors />
      {/*       </Provider> */}
    </Router>
  );
}

export default App;
