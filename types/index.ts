export type PlatformProps = {
  image: string;
  name: string;
  link: string;
};

export type UserProps = {
  _id: number;
  name: string;
  links: LinkProps[];
};

export type LinkProps = {
  _id: number;
  platform: string;
  url: string;
};
