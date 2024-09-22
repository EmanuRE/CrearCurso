import { Link } from 'react-router-dom';
import '../style/Menu.css'; //Estilo Menu


const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
      <li>
          <Link to="/">Menu</Link> 
        </li>
        <li>
          <Link to="/crearcurso">Crear Curso</Link>
        </li>
  
      </ul>
    </nav>
  );
};

export default Menu;