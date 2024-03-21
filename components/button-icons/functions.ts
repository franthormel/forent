import { IconSize } from "./types";

export function iconSize(size?: IconSize): number {
  if (size) {
    return size;
  }
  return 24;
}
