import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import HomePage from "./pages/home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
