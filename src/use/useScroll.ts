export function useScroll(to: string) {
  console.log(to)
  let to_ = document.getElementById(to);
  to_?.scrollIntoView();
}