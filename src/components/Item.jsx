import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";

export default function Item({ item, onDeleteItem, onPackedItem }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <li
        style={
          item.packed ? { backgroundColor: "green", borderColor: "green" } : {}
        }
      >
        <Checkbox
          {...label}
          className="check"
          size="large"
          sx={{
            color: green[800],
            "&.Mui-checked": {
              color: green[600],
            },
          }}
          onChange={() => onPackedItem(item.id)}
        />
        <p style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity === 1 ? "" : item.quantity} {item.description}
        </p>
        <span
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteItem(item.id);
          }}
        >
          ❌
        </span>
      </li>
    </>
  );
}
