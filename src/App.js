import Header from "./components/Header";
import Product from "./components/Product";

import "./App.css";
import Products from "./Products.json";
import { useEffect, useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sum = basket.reduce((accumulator, object) => {
      return accumulator + object.price * object.quantity;
    }, 0);
    setTotal(sum);
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} />
      <div className="main-content">
        <div className="select-1">
          {Products.map((product) => (
            <Product
              id={product.id}
              img={product.image}
              name={product.title}
              price={product.price}
              setBasket={setBasket}
              basket={basket}
            />
          ))}
        </div>
        <div className="select-2">
          <h2>Basket</h2>
          <ul>
            {basket.map((item) => {
              return (
                <li>
                  {item.name}-{item.price}-{item.quantity}
                </li>
              );
            })}
          </ul>
          <hr />
          <div>Toplam: {total} </div>
          <hr />
          <button onClick={()=> setBasket([])}>Sepeti Boşalt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
