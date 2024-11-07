type Path = `/${string}`;

type Route = {
  [name: string]: Route | ((...args: any[]) => Path);
};

export const routes = {
  home: {
    getPath: () => "/",
  },
  messages: {
    getPath: () => "/messages",
  },
  favorites: {
    getPath: () => "/favorites",
  },
  search: {
    getPath: () => "/search",
  },
} satisfies Route;
