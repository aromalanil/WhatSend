import NavBar from './Components/NavBar';
import Description from './Components/Description';
import MessageForm from './Components/MessageForm';
import Footer from './Components/Footer';

import useDesktop from './Hooks/useDesktop';

function App() {
  const isDesktop = useDesktop();

  return (
    <>
      <NavBar />
      <main className="main-section">
        {isDesktop && <Description />}
        <MessageForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
