import Input from '@material-ui/core/Input';

const { RadioGroup, Select, Checkbox } = require('../components');

export default ({ schema, uiSchema = {} }) => {
  // console.log('getComponent schema: %o, uiSchema: %o', schema, uiSchema);
  const widget = uiSchema['ui:widget'];
  const { type } = schema;

  if (schema.enum) {
    if (widget === 'radio') {
      return RadioGroup;
    }
    else if (widget === 'checkboxes') {
      return Checkbox;
    }
    return Select;
  }
  else if (type === 'boolean') {
    return Checkbox;
  }
  return Input;
};
