import React from 'react';
import classNames from 'classnames';
import keys from 'lodash/keys';
import { withStyles } from '@material-ui/core/styles';
import FormField from '../FormField';
import fieldSetStyles from './field-set-styles';

export const RawFieldSetObject = ({ className, classes, schema = {}, uiSchema = {}, data = {}, path, ...rest }) => {
  const orientation = (uiSchema['ui:orientation'] === 'row' ? classes.row : null);
  let orderedProperties = Object.assign({}, schema.properties);

  // if we have propertyOrder arrange then in that order
  if (schema.propertyOrder) {
    orderedProperties = {};
    schema.propertyOrder.forEach((key) => {
      orderedProperties[key] = schema.properties[key];
    });
  }

  return (
    <div className={`${classNames(classes.root, orientation)} FieldSetObject`}>
      {keys(orderedProperties).map((p) => {
        const newPath = path ? `${path}.${p}` : p;
        return (
          <FormField
            key={p}
            objectData={data}
            path={newPath}
            required={schema.required}
            schema={schema.properties[p]}
            data={data[p]}
            uiSchema={uiSchema[p] || {}}
            {...rest}
          />
        );
      })}
    </div>
  );
};
export default withStyles(fieldSetStyles.fieldSetObject)(RawFieldSetObject);
