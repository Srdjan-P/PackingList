import Item from "./Item";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  console.log(sortedItems);
  return (
    <>
      <div className="actions">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
              className="sortBy"
            >
              <MenuItem value="input">Input order</MenuItem>
              <MenuItem value="description">Description</MenuItem>
              <MenuItem value="packed">Packed status</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          className="clearList"
          variant="contained"
          size="large"
          type="submit"
          onClick={onClearList}
        >
          Clear list
        </Button>
      </div>
      <main>
        <ul>
          {sortedItems.map((item) => {
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
    </>
  );
}
