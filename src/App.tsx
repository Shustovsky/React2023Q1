import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { Layout } from './components/Layout';
import { FormPage } from './pages/Form/FormPage';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
