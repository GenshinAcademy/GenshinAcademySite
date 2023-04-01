export function useDateFormatter(value: string): string {
  // const date = value.slice(0, -1) + '+00:00';
  const dateFormat = new Date(value);
  
  
  const options: object = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  
  return dateFormat.toLocaleString('ru-RU', options);
}