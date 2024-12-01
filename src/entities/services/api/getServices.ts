import { SERVICES_API_URL } from '../constants';

import { Service } from '../types';

export const getServices = async (): Promise<Service[]> => {
  const response = await fetch(SERVICES_API_URL);
  const services = await response.json();

  return services;
};
