import React from "react";

const Product = ({ id, img, name, price, basket, setBasket }) => {
  const removeBasket = (id) => {
    
    const currentProduct = basket.find((item) => item.id === id);
   
    if (currentProduct) {
      currentProduct.quantity -= 1;

      if(currentProduct.quantity === 0){
        
        setBasket(basket.filter((item)=> item.id !== id))
      }else{
        setBasket([...basket.filter((item) => item.id !== id),currentProduct])
      }
      
      
    }
  };

  const addBasket = (product) => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.quantity += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="name">{name}</div>
      <div className="price">$ {price}</div>
      <div className="btn-group">
        <button onClick={() => removeBasket(id)}>Sat</button>
        <input
          type="text"
          value={basket.find((item) => item.id === id)?.quantity || 0}
          disabled
        />
        <button onClick={() => addBasket({ id: id, name: name, price: price })}>
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default Product;
