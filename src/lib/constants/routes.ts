export const routes = {
  home: "/",
  messages: "/messages",
  favorites: "/favorites",
  counselor: "/counselor",
  terms: "/terms",
  privacy: "/privacy",
  auth: {
    getPath: () => "/auth",
    enterPhone: "/auth/enter-phone",
    enterOtp: "/auth/enter-otp",
  },
  me: {
    index: "/me",
  },
  profile: {
    index: (id: string) => `/${id}`,
  },
};
