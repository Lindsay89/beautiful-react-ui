/**
 * This function returns the reverse of the given placement
 */
const getOppositePlacement = (placement) => {
  const reversePlacement = {
    'top-left': 'bottom-left',
    'top-center': 'bottom-center',
    'top-right': 'bottom-right',
    'bottom-left': 'top-left',
    'bottom-center': 'top-center',
    'bottom-right': 'top-right',
    'left-center': 'right-center',
    'right-center': 'left-center',
  };

  return reversePlacement[placement];
};

export default getOppositePlacement;
