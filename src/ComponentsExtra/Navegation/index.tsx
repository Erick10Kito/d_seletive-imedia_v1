import { X, UserCircle, Sidebar, XCircle } from "phosphor-react";
import { useState } from "react";
import { MenuNavegation } from "../MenuNavegation";

const Navegation = () => {
  const [menuNavegation, setMenuNavegation] = useState(false);

  return (
    <>
      <nav className="flex justify-between h-24 items-center px-5">
        <div>
          <button onClick={() => setMenuNavegation(!menuNavegation)}>
            {!menuNavegation ? (
              <X size={40} color="#fff" />
            ) : (
              <XCircle size={40} color="#fff" />
            )}
          </button>
          {menuNavegation ? <MenuNavegation /> : null}
        </div>

        <div className="flex items-center gap-4">
          <UserCircle size={40} color="#fff" />
          <div>
            <h2 className="text-white">Erick Campos</h2>
            <p className="text-white">Desenvolvedor</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navegation };
