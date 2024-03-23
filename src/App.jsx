import { useState } from 'react';
import { Guitar } from './components/Guitar'
import { Header } from './components/Header'
import './index.css'
import { db } from './data/db';



export const App = () => {

  //STATE//
  const [data, setData] = useState(db);
  const [cart, setCart ] = useState([]);

  //EFFECT//






  const addToCart = (item) => {

    //aqui buscamos un id repetido, de forma que no se agregue el mismo al carrito
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    //si el item ya existe, se aumentara el numero, caso contrario, se agregara como nuevo item
    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++;
      setCart(updatedCart)
    } else {
      item.quantity = 1;
      setCart([...cart, item])
    }

  }

  return (
    <>
      <Header cart={cart} />

      <main className="container-xl mt-5">

        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {
            data.map(guitar => (
              <Guitar 
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}/>
            ))
          }

        </div>

      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}