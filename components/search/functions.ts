import { SearchWidth } from "./type";

export function searchAction(func?: Function) {
  if (func) {
    func();
  }
}

export function searchWidth(width?: SearchWidth): string {
  let value;

  switch (width) {
    case "small":
      value = "w-52";
      break;
    case "large":
      value = "w-96";
      break;
    default:
      value = "w-72";
      break;
  }

  return value;
}
