export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer>
        <em>Let's start packing! 🎉</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  console.log(percentage);

  return (
    <footer>
      <em>
        {percentage === 100
          ? "🚗 You are ready to go! 🚂"
          : `You have ${numItems} items on your list, and you have already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
