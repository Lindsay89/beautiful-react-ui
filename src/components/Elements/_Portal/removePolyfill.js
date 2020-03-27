// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function RemovePolyfill(arr) {
  arr.forEach((item) => {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      },
    });
  });
}([Element.prototype, CharacterData.prototype, DocumentType.prototype]));
