import './HeaderStyles.css'; 
export default function Header() {
  return (
    <div className="header-container">
        <h1 className="header-title">Guess The Numbers</h1>
        <p className="header-description"> 
          The player who guesses more numbers than the rest of the others wins!
        </p>
    </div>
  );
}