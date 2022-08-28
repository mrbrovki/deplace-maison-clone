import Theme from '../theme';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <Theme>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </Theme>
  )
}

export default Layout;