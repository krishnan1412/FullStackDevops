import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import { fetchItems, addItem } from './api';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAdd = async () => {
    const newItem = { name: 'New Item', quantity: 1 };
    const added = await addItem(newItem);
    setItems([...items, added]);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <button onClick={handleAdd}>Add Item</button>
      <ItemList items={items} />
    </div>
  );
}

export default App;

