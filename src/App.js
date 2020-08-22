import React from 'react';
import NavBar from './Components/NavBar';
import Description from './Components/Description';
import MessageForm from './Components/MessageForm';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <NavBar />
            <main className="main-section">
                <Description />
                <MessageForm />
            </main>
            <Footer/>
        </>
    )
}

export default App
