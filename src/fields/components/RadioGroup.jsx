import React from 'react';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

export default ({ path, options = [], value, onChange, inputProps, nullOption, ...rest }) => (
  <RadioGroup
    {...rest}
    aria-label={path}
    name={path}
    value={String(value)}
    onChange={onChange}
  >
    {options.map(o => <FormControlLabel key={o.key} value={String(o.key)} control={<Radio />} label={o.value} />)}
  </RadioGroup>
);
