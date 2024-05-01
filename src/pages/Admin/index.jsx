import React, { useState, useContext, useEffect } from 'react';
import './Admin.scss'; 
import Modal from '../../components/modal';
import { ShoppingCartContext } from '../../context';

function Admin() {
  const { addProduct, items, updateProduct, abrirModal, cerrarModal, modalAbierto } = useContext(ShoppingCartContext);

  const [elementos, setElementos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editando, setEditando] = useState(false);
  const [idProduct, setIdProduct] = useState(null)
  const [elementoEditadoIndex, setElementoEditadoIndex] = useState(null);

  const agregarElemento = () => {
    
    if (titulo && precio && imagen && categoria && descripcion) {
        
      var product = {
        titulo,
        precio: precio,
        imagen,
        categoria,
        descripcion
      }
      addProduct({...product})
    }
  };

  const editarElemento = (id) => {
    abrirModal()
    setIdProduct(id)
  };

  const guardarCambios = () => {
    const nuevosElementos = [...elementos];
    nuevosElementos[elementoEditadoIndex] = elementoActual;
    setElementos(nuevosElementos);
    setElementoActual('');
    setEditando(false);
    setElementoEditadoIndex(null);
  };

  const eliminarElemento = (index) => {
    const nuevosElementos = elementos.filter((_, i) => i !== index);
    setElementos(nuevosElementos);
  };

  return (
    <div className="admin-panel">
      {modalAbierto && <Modal
          id={idProduct} 
          precio={precio}
          setPrecio={setPrecio}  
      />}
      <div className="formulario-container">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo"
        />
        <input
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripcion"
        />
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          placeholder="Imagen"
        />
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoria"
        />
        {editando ? (
          <button onClick={guardarCambios}>Guardar</button>
        ) : (
          <button onClick={agregarElemento}>Agregar</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((elemento, index) => (
            <>
            <tr key={index}>
              <td>{elemento.title}</td>
              <td>
                <button onClick={() => editarElemento(elemento.id)}>Editar</button>
                <button onClick={() => eliminarElemento(index)}>Eliminar</button>
              </td>
            </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
