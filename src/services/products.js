export const getProducts = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

 export const postProduct = async ({ titulo, precio, imagen, categoria, descripcion }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: titulo,
          price: Number(precio),
          description: descripcion,
          category: categoria,
          image: imagen
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  export const putProduct = async (id, precio) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            price: Number(precio),
          })
        });
        return await response.json();
      } catch (error) {
        console.error('Error adding product:', error);
      }
  
  }