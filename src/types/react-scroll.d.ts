declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    onClick?: () => void;
  }

  export const Link: React.FC<LinkProps & React.HTMLProps<HTMLAnchorElement>>;
  export const Element: React.FC<{ name: string } & React.HTMLProps<HTMLDivElement>>;
  export const Events: {
    scrollEvent: {
      register: (name: string, callback: () => void) => void;
      remove: (name: string) => void;
    };
  };
  export const scrollSpy: {
    update: () => void;
  };
} 