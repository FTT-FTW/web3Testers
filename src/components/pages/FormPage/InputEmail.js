import React, { useState } from "react";
import { TextField } from "@mui/material";
import isEmail from "validator/lib/isEmail";

export default function InputEmail(props) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [dirty, setDirty] = useState(false);

  const options = {
    domain_specific_validation: true,
  };
  const handleChange = (event) => {
    const val = event.target.value;
    if (isEmail(val, options)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setValue(val);
    props.handleChange(val, isValid);
  };

  return (
    <>
      <TextField
        error={dirty && isValid === false}
        onBlur={() => setDirty(true)}
        variant="outlined"
        value={value}
        sx={{
          backgroundColor: "white",
          width: "70%",
        }}
        id="outlined-basic"
        label="Email"
        type="email"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
