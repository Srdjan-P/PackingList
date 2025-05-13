import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const essentialItems = [
    "Companion 😃",
    "Passport",
    "Money",
    "Phone",
    "Clothes",
    "Swimsuit",
    "Hat",
    "Sunglasses",
    "Sunscreen",
    "Medicine",
    "Charger",
    "Insect repellent",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      return alert("Please enter an item");
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>What do you need for your trip? 😍</p>
      </div>
      <div className="form-inputs">
        <Stack className="input-items" spacing={2} sx={{ width: 250 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            value={description}
            options={essentialItems}
            onChange={(event, newValue) => setDescription(newValue)}
            onInputChange={(event, newInputValue) => {
              const capitalizedInput =
                newInputValue.charAt(0).toUpperCase() + newInputValue.slice(1);
              setDescription(capitalizedInput);
            }}
            renderInput={(params) => <TextField {...params} label="Items" />}
          />
        </Stack>
        <FormControl className="input-quantity" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={quantity}
            label="Quantity"
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
        <Button
          className="btn"
          variant="contained"
          size="large"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
