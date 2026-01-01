import { Routes, Route } from "react-router";
import { lazy } from "react";
import Root from "./pages/Root";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicePage/ServicesPage"));
const ResumePage = lazy(() => import("./pages/ResumePage/ResumePage"));
const WorkPage = lazy(() => import("./pages/WorkPage/WorkPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/work" element={<WorkPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
