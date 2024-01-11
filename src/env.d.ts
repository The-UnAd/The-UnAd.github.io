/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module "astro-icon/components" {
  export function Icon(props: {
    name: string;
    size?: string;
    color?: string;
    class?: string;
    style?: string;
  }): any;
}
