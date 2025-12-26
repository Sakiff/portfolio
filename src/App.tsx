import { Routes, Route } from "react-router";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicePage/ServicesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
