import { Route, Routes } from 'react-router-dom';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
// eslint-disable-next-line
import Home from './components/Pages/Home';
import ProductDetailsPage from './components/Pages/ProductDetailsPage';
import ProductsPage from './components/Pages/ProductsPage';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MarketingAgencyHome />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
              path="products/:productId"
              element={<ProductDetailsPage/>}></Route>
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/blog-details/:id" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
