export const paths = {
  home: '/',
  services: '/services',
  service: (serviceId: number | string): string => `/services/${serviceId}`,
  login: '/login',
  profile: '/user/me',
} as const;
