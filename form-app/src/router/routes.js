import Application from "../components/Application";
import Form from "../components/Form";
import Home from "../components/Home";

export const routes = [
  { path: "/", element: Home, exact: true },
  { path: "/form", element: Form, exact: true },
  { path: "/application", element: Application, exact: true },
];
