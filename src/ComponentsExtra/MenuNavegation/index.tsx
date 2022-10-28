import { Link } from "react-router-dom";

const MenuNavegation = () => {
  return (
    <div className="absolute bg-red-500 p-4 m-0 w-[380px]">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/clientes"}>Lista de Clientes</Link>
        </li>
      </ul>
    </div>
  );
};

export { MenuNavegation };
