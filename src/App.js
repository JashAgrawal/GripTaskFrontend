import { App as Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Transfer from "./pages/Transfer";
import Records from "./pages/Records";
import TransferPage from "./pages/TransferPage";
import { AiFillBank } from "react-icons/ai";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/transfer",
      element: <Transfer />,
    },
    {
      path: "/records",
      element: <Records />,
    },
    {
      path: "/transfer-page/:id",
      element: <TransferPage />,
    },
  ]);
  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <AiFillBank />
          </a>
        </div>
      </nav>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
