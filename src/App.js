import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="App">
            <header>
                <h1>Khushi Kumari</h1>
                <p>Welcome to my portfolio!</p>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="about">
                <h2>About Me</h2>
                <p>
                    Hello! I am a second-year Electronics and Communication Engineering student at NIT Patna. 
                    I am passionate about web development, open source, and coding.
                </p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li>Project 1: <a href="https://github.com/Kh123ushi/snake_game">Snack game</a></li>
                    <li>Project 2: <a href="https://github.com/Kh123ushi/rock-paper-scissor-game-project">Stone-papaer-scissor game</a></li>
                    <li>Project 3: <a href="https://github.com/Kh123ushi/PRODIGY_WD_05">Weather App</a></li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2024 Khushi Kumari</p>
            </footer>
        </div>
    );
}

export default App;
