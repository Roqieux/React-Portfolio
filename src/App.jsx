// import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main className="mx-5 my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;