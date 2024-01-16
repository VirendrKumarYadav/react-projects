import './Footer.css'
import { Link} from 'react-router-dom'

function Footer(){

    return (
      <div class="foot">
        <h3>Make Notes, Save Notes</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
          quo deserunt quos expedita minima incidunt sed tempora, a architecto
          consectetur reprehenderit, in repellat voluptatum.
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contect">Contect</Link>
          </li>
          <li>
            <Link to="/Food">Food</Link>
          </li>
          <li>
            <Link to="/Resturent">Resturent</Link>
          </li>
        </ul>
      </div>
    );
}

export default Footer;