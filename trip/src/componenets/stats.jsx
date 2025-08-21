export default function Stats({ item }) {
  if (!item.length) {
    return (
      <footer>
        <strong>Start adding some items to your packing list </strong>
      </footer>
    );
  }

  const numItem = item.length;
  const numPacked = item.filter((obj) => obj.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer>
      <strong>
        {percentage === 100
          ? "you got everything ! Ready to go 🛬"
          : `
        👜 You have ${numItem} items on your list , and you already packed ${numPacked} (${percentage}%)
        `}
      </strong>
    </footer>
  );
}
