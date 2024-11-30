export const paths = {
  home: '/',
  services: '/services',
  service: (serviceId: number | string): string => `/services/${serviceId}`,
  login: '/login',
  profile: (userId: number | string) => `/user/${userId}`,
} as const;
