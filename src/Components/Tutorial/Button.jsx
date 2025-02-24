import React, { useState } from "react";
import { Button } from "@mui/material";
const ButtonTutorial = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleTotaal = () => {
    setTotal(total + 1);
  };

  const handleName = () => {
    setName("Devendar");
  };
  return (
    <div>
        
      <Button
        onClick={handleCount}
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
        color="success"
      >
        First Button
      </Button>
      <Button onClick={handleTotaal} sx={{ margin: 3 }} size="medium" variant="outlined" color="error">
        Second Button
      </Button>
      <Button onClick={handleName} sx={{ margin: 3 }} size="small" variant="text" color="info">
        Third Button
      </Button>

        <div style={{textAlign:"center"}}>
        <p style={{background:"green", color:"wheat"}}>Count:{count}</p>
        <p style={{background:"red"}}>Total:{total}</p>
        <p style={{background:"blue", color:"orange"}}>Name:{name}</p>
        </div>
    </div>
  );
};

export default ButtonTutorial;
