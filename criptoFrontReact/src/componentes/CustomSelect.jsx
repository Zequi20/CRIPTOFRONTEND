import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect({ options, onSelectionChange }) {
    const [coin, setCoin] = useState("");

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setCoin(selectedValue);
        // Llamamos a la función de devolución de llamada con el valor seleccionado
        if (onSelectionChange) {
            onSelectionChange(selectedValue);
        }
    };

    useEffect(() => {
        // Asignar el valor de la primera opción al estado cuando el componente se monta
        if (options.length > 0 && !coin) {
          setCoin(options[0].value);
        }
      }, [options, coin]);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl id="perro" fullWidth>
                <InputLabel id="custom-select-label">Moneda</InputLabel>
                <Select
                    labelId="custom-select-label"
                    id="CustomSelect"
                    value={coin}
                    label="Moneda"
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
