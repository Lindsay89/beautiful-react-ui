/*
* This function returns the element having the given id, if that element doesn’t exist then creates and returns it
*/
const getPortalWrapper = (id) => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
  }
  return element;
};

export default getPortalWrapper;
