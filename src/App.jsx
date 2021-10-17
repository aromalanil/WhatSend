import NavBar from './components/NavBar';
import Footer from './components/Footer';
import useDesktop from './hooks/useDesktop';
import Description from './components/Description';
import MessageForm from './components/MessageForm';

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
