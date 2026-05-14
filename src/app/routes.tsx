import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import InsightsPage from "./pages/InsightsPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "case-studies", Component: CaseStudiesPage },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:id", Component: ArticleDetailPage },
      { path: "admin", Component: AdminPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);