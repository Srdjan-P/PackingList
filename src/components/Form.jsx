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
    "Companion 👫",
    "Passport 🛂",
    "Money 💵",
    "Phone 📱",
    "Clothes 👚",
    "Swimsuit 👙",
    "Hat 👒",
    "Sunglasses 🕶",
    "Sunscreen 🧴",
    "Medicine 💊",
    "Charger 🔋",
    "Insect repellent 🦟",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      return alert("Please enter an item.");
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>What do you need for your trip? 😍</p>
      <div className="form-input">
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
            ListboxProps={{
              sx: {
                "& .MuiAutocomplete-option": {
                  fontSize: "2rem",
                  minHeight: "4rem",
                },
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Items"
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "2rem",
                    height: "5.4rem",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "2rem",
                  },
                }}
              />
            )}
          />
        </Stack>
      </div>
      <div className="form-quantity-button">
        <FormControl className="input-quantity" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{ fontSize: "1.5rem" }}
          >
            Quantity
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={quantity}
            label="Quantity"
            onChange={(e) => setQuantity(Number(e.target.value))}
            sx={{
              fontSize: "2rem",
              height: "5.4rem",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <MenuItem key={num} value={num} sx={{ fontSize: "1.9rem" }}>
                {num}
              </MenuItem>
            ))}
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
