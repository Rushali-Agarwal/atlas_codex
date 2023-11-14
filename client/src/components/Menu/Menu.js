import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {/* <span className="logo">Atlas_Codex</span> */}
      {/* <div className="logo">
        <img  src="images/2.png" alt="Okay"></img>
      </div> */}
      
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>

          {item.listItems.map((ListItem) => (
            <Link to={ListItem.url} className="ListItem active" key={ListItem.id}>
              <img className="icon" src={ListItem.icon} alt=""></img>
              <span className="listitemTitle">{ListItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
