import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  RouterProvider,
  Router
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import RootLayout from "./Layouts/RootLayout";
import Footer from "./componenets/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route index path="/Unicode-Task-4" element={<Home />} />
      <Route path="/Unicode-Task-4/home" element={<Home />} />
      <Route path="/Unicode-Task-4/login" element={<Login />} />
      <Route path="/Unicode-Task-4/register" element={<Register />} />
      <Route path="/Unicode-Task-4/details" element={<Details />} />
      <Route path="/Unicode-Task-4/cart" element={<Cart />} />
    </>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
