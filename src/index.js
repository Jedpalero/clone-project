import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import {
  Navigate,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import App from "./App.js";
import Library from "./components/Library.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
