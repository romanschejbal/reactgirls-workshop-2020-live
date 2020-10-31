import * as React from 'react';
import Footer from './components/Footer';

import Layout from './components/Layout';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';

function getPageByTitle(title) {
  switch (title) {
    case 'Home':
      return <Home />;
    case 'Work':
      return <Work />;
    default:
      return <div>404 Not found</div>;
  }
}

function App() {
  const [activePage, setActivePage] = React.useState('Home');

  return (
    <Layout>
      <Navigation
        activePage={activePage}
        setActivePage={setActivePage}
        items={[
          { title: 'Home', icon: 'fas fa-igloo' },
          { title: 'Work', icon: 'fas fa-folder' },
          // { title: 'Contact', icon: 'fas fa-envelope' },
          {
            title: 'Twitter',
            icon: 'fab fa-twitter',
            href: 'https://twitter.com/romanschejbal',
          },
          {
            title: 'Instagram',
            icon: 'fab fa-instagram',
            href: 'https://instagram.com/roman.schejbal',
          },
        ]}
      />
      <Main>{getPageByTitle(activePage)}</Main>
      <Footer>El Nina 2020</Footer>
    </Layout>
  );
}

export default App;
