import React from 'react';
import { MenuItem, Select } from '@material-ui/core';

export default ({ type, value = '', options, nullOption, onChange, ...rest }) => (
  <Select
    {...rest}
    value={String(value)}
    onChange={onChange}
  >
    {value === null && <MenuItem value={''}>{nullOption}</MenuItem>}
    {options.map(o => <MenuItem key={o.key} value={String(o.key)}>{String(o.value)}</MenuItem>)}
  </Select>
);
