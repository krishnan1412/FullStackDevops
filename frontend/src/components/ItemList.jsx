function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>{item.name} - {item.quantity}</li>
      ))}
    </ul>
  );
}

export default ItemList;
