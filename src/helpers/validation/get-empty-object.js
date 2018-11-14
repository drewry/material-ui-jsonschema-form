// this is needed for when you pass in an object that doesn't have nested objects in the data
export const getEmptyData = (data, schema) => {
  const emptyData = Object.assign({}, data);

  Object.keys(schema.properties).forEach((key) => {
    const prop = schema.properties[key];
    if (prop.type === 'object') emptyData[key] = getEmptyData((emptyData[key] || {}), prop);
  });
  return emptyData;
};

const getEmptyObject = (schema) => {
  const object = {};
  Object.keys(schema.properties).forEach((key) => {
    const prop = schema.properties[key];
    if (prop.type === 'object') object[key] = getEmptyObject(prop);
  });
  return object;
};

export default getEmptyObject;
