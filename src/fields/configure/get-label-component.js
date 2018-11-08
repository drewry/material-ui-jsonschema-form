// import Input, { InputLabel } from '@material-ui/core/Input'; // eslint-disable-line import/no-named-default
import { InputLabel, FormLabel } from '@material-ui/core';

export default ({ schema, uiSchema = {} }) => {
  const widget = uiSchema['ui:widget'];
  const { type } = schema;

  if (schema.enum && widget === 'radio') {
    return FormLabel;
  }
  // boolean
  if (type === 'boolean' || widget === 'checkboxes') return null;
  return InputLabel;
};
