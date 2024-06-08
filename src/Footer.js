import './Footer.css'

function Footer() {
    return (
      <div className="footer">
        <ul className="footer-list">
          <li className="footer-item">
            <a href="https://github.com/rohitkommuru" target="_blank" rel="noopener noreferrer">
              <img src="/home/rkommuru/personal-website/src/Github.png" alt="GitHub" className="footer-icon" />
            </a>
          </li>
          <li className="footer-item">
            <a href="mailto:rohitkommuru@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://e1.pngegg.com/pngimages/414/1006/png-clipart-black-n-white-mail-envelope-icon.png" alt="Email" className="footer-icon" />
            </a>
          </li>
          <li className="footer-item">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn" className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
export default Footer;  