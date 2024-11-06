type Path = `/${string}`;

type Route = {
  [name: string]: Route | ((...args: any[]) => Path);
};

export const routes = {
  home: {
    getPath: () => "/",
  },
} satisfies Route;
