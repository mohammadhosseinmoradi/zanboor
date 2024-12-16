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
  statistics: "/statistics",
  about: "/about",
  changePhone: "/change-phone",
  settings: {
    index: "/settings",
  },
  wallet: "/wallet",
  auth: {
    getPath: () => "/auth",
    enterPhone: "/auth/enter-phone",
    enterOtp: "/auth/enter-otp",
  },
  profile: {
    index: "/profile",
    edit: "/profile/edit",
  },
  user: {
    index: (id: string) => `/${id}`,
  },
};
