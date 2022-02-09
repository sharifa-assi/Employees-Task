import logo from "./logo.svg";
import "./App.css";
import Listing from "./components/Listing";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Welcome from "./pages/Welcome";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
  



<BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/list" element={<Listing />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
