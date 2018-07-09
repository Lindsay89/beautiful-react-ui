const getElementAbsoluteTop = (element: HTMLElement): number => {
  let el: HTMLElement = element;
  let top: number = 0;

  do {
    top += el.offsetTop || 0;
    el = (el.offsetParent as HTMLElement);
  } while (el);

  return top;
};

export default getElementAbsoluteTop;
