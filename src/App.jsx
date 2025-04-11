import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]); //useState

  useEffect(() => { //useEffect
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Paracetamol", price: 120.00 },
        { id: 2, name: "Ibuprofeno", price: 80.00 },
        { id: 3, name: "Mariguanol", price: 240.00 },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>FarmaTec</h1>
        <p>Tu tienda de confianza para productos de farmacia</p>
      </header>

      <main>
        <section className="product-list">
          <h2 className="title">Los mejores medicamentos</h2>
          {products.length === 0 ? (
            <p className="loading">Cargando productos...</p>
          ) : (
            <div className="products">
              {products.map(product => (  //map
                <div key={product.id} className="product-card">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <button onClick={() => alert(`Agregado ${product.name}`)}>
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        © 2025 FarmaTec. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
