export const generateNextId = (array: Todo[]) => {
  return array.length !== 0 ? array[array.length - 1].id + 1 : 1;
};
