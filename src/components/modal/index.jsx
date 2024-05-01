import React, { useContext} from 'react';
import './Modal.scss'; // Importar estilos Sass
import { ShoppingCartContext } from '../../context';


function Modal({precio, setPrecio, id }) {
const { cerrarModal, updateProduct } = useContext(ShoppingCartContext);

  return (
    <div>
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={cerrarModal}>X</span>
            <div className="formulario-container">
                <input
                type="text"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                placeholder="Precio"
                />
                <button onClick={() => updateProduct(id, precio)}>Guardar</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Modal;
