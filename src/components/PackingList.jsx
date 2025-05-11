import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onPackedItem }) {
  return (
    <main>
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
            />
          );
        })}
      </ul>
    </main>
  );
}
