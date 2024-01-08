import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home, { loader as homePageLoader } from "./pages/home/home";
import Error from "./pages/home/error";
import Cities, { action as formAction } from "./pages/cities/cities";
import Landing from "./pages/landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route
        path="/weather"
        element={<Home />}
        loader={homePageLoader}
        errorElement={<Error />}
      />
      <Route path="cities" element={<Cities />} action={formAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
