export function useScroll(to: string) {
  let to_ = document.getElementById(to);
  to_?.scrollIntoView();
}