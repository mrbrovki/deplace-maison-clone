import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Error from './Error';
import Home from './Home';

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Pages;