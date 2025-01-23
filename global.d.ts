declare module "*.svg" {
  import { FunctionComponent } from "react";
  import { SvgProps } from "react-native-svg";
  const content: FunctionComponent<SvgProps>;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
