export const routes = {
  home: "/",
  messages: "/messages",
  favorites: "/favorites",
  search: "/search",
  terms: "/terms",
  privacy: "/privacy",
  auth: {
    getPath: () => "/auth",
    enterUserId: "/auth/enter-user-id",
    enterOtp: "/auth/enter-otp",
  },
};