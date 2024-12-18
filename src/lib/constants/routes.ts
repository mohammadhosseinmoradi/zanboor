export const routes = {
  home: "/",
  messages: {
    index: "/messages",
    chat: (id: string) => `/messages/${id}`,
  },
  favorites: "/favorites",
  blockedUsers: "/blocked-users",
  counselor: "/counselor",
  terms: "/terms",
  privacy: "/privacy",
  about: "/about",
  changePhone: "/change-phone",
  wallet: "/wallet",
  auth: {
    getPath: () => "/auth",
    enterPhone: "/auth/enter-phone",
    enterOtp: "/auth/enter-otp",
  },
  profile: {
    index: "/profile",
    edit: "/profile/edit",
    settings: {
      index: "/profile/settings",
    },
    statistics: "/profile/statistics",
  },
  user: {
    index: (id: string) => `/${id}`,
  },
};
