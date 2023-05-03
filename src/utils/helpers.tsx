export const generateNextId = (array: any[]) => {
  if (array) {
    const nextId: number = array[0]?.id ? array[array.length - 1].id + 1 : 1;
    return nextId;
  }
  return 0;
};
