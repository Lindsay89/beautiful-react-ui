/*
* Function used to create div for modal component if this div doesn't exist
* This getPortalWrapper create modal div on first component render.
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
