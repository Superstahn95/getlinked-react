import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Page404 from "./pages/page404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
