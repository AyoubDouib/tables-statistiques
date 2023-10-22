import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <div className="me">Créée par <span>AYOUB DOUIB</span></div>
          <div className="links">
            <a href="https://www.instagram.com/ayoub__dev"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/ayoub-douib-736666237"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  )
}