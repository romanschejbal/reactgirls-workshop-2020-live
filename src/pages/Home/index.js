import './index.css';

export default function Home() {
  return (
    <div className="home">
      <div className="intro-text">
        <h1>Roman Schejbal</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="intro-image">
        <img
          alt="personal photo"
          src="https://images.unsplash.com/photo-1604115707355-73a0b1a10870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2135&q=80"
        />
      </div>
    </div>
  );
}
