export const routes = {
  home: "/",
  messages: "/messages",
  profile: "/profile",
  favorites: "/favorites",
  search: "/search",
  terms: "/terms",
  privacy: "/privacy",
  auth: {
    getPath: () => "/auth",
    enterPhone: "/auth/enter-phone",
    enterOtp: "/auth/enter-otp",
  },
  users: {
    index: "/users",
    show: (id: string) => `/users/${id}`,
  },
};
