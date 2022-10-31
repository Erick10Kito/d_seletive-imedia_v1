import { Link } from "react-router-dom";

const MenuNavegation = () => {
  return (
   
   <div className="absolute p-4 m-0 w-[380px] left-0 bg-blue-800 z-10">
   <div>
     <h1 className="text-white text-2xl leading-7">GESTÃO DE CLIENTES</h1>
      <ul className="pt-4 pb-12">
        <li>
        <Link className="text-xl text-white opacity-50 font-light hover:opacity-100" to={"/clientes"}>Lista de clientes</Link>
        </li>
        <li>
        <Link className="text-xl text-white opacity-50 font-light hover:opacity-100" to={"/"}>Cadastrar cliente</Link>
        </li>
      </ul>
      </div>

      <div>
     <h1 className="text-white text-2xl leading-7">GESTÃO DE VENDAS</h1>
      <ul className="pt-4 pb-12">
        <li>
        <Link className="text-xl text-white opacity-50 font-light hover:opacity-100" to={"/clientes"}>Lista de vendas</Link>

        </li>
        <li>
        <Link className="text-xl text-white opacity-50 font-light hover:opacity-100" to={"/"}>Cadastrar venda</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export { MenuNavegation };
