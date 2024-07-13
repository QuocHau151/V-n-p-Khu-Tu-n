export function formatToString(price: string) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
export function formatToNumber(price: string) {
  let noDots = price.replace(/\./g, "");
  return Number(noDots);
}
