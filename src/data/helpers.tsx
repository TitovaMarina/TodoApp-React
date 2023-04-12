export function getDataFromLocalStorage(): Todo[] {
  const data: string | null = localStorage.getItem('dataLocalStorage');
  const todoItems: Todo[] = JSON.parse(data ? data : '');
  return todoItems;
}
