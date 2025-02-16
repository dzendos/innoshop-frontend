import React, { useState } from 'react';
import './../../assets/css/purchasecard.css';
import Alerting from '../Verdict/Alert';

interface ItemVariety {
  images: string[];
  size: string | null;
}

interface Item {
  _id: string;
  name: string;
  size: string | null;
  price: number;
  quantity: number;
  varieties: ItemVariety[];
}

interface PurchaseCardProps {
  item: Item;
  onQuantityChange: (itemId: string, itemSize: string | null, newQuantity: number) => void;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ item, onQuantityChange }) => {
  const [itemQuantity, setItemQuantity] = useState<number>(item.quantity);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity((value) => value - 1);
      onQuantityChange(item._id, item.size, itemQuantity - 1); // Notify parent component
    }
    if (itemQuantity === 0) {
      onQuantityChange(item._id, item.size, itemQuantity);
      return null;
    }
  };

  const increaseQuantity = () => {
    setItemQuantity((value) => value + 1);
    onQuantityChange(item._id, item.size, itemQuantity + 1); // Notify parent component
  };

  const handleDelete = () => {
    setItemQuantity(0);
    onQuantityChange(item._id, item.size, 0);
    setShowAlert(false);
  };

  const handleConfirmDelete = () => {
    if (itemQuantity === 1) {
      setShowAlert(true);
    } else {
      decreaseQuantity();
      onQuantityChange(item._id, item.size, itemQuantity - 1);
    }
  };

  if (itemQuantity === 0) {
    return null; // Return null to remove the card from the UI
  }

  return (
    <div className="item-card">
      {showAlert && (
        <Alerting message={`Deleting ${item.name}. Are you sure?`} onAcceptance={handleDelete} onClose={() => setShowAlert(false)} />
      )}
      <div className='item-details-section'>

        <div className="image-gallery">

          <img src={`http://localhost:3001/${item.varieties[0].images[0]}`} crossOrigin="anonymous" alt={item.name} />
        </div>
        <div className="price-section">
          {item.varieties[0].size !== null && (
            <h3>
              {item.name + ' ' + item.size}
            </h3>
          )}
          {item.varieties[0].size === null && (
            <h3>{item.name}</h3>
          )}
          <p>Price: {item.price}</p>
        </div>
      </div>
      <div className="quantity-section">
        <button onClick={handleConfirmDelete} className="quantity-btn">
          &ndash;
        </button>
        <span>{itemQuantity}</span>
        <button onClick={increaseQuantity} className="quantity-btn">
          +
        </button>
      </div>
    </div>
  );
};

export default PurchaseCard;
