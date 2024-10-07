import About from "./pages/About";
import Home from "./pages/Home";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./components/Error/PageNotFound";
import Error from "./components/Error/Error";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import AboutBasic from "./pages/AboutBasic";
import Page from "./pages/Page";
import Grid from "./pages/Grid";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-basic" element={<AboutBasic />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />{" "}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
