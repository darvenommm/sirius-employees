import { SERVICES_API_URL } from '../constants';

import { Service } from '../types';

export const getService = async (serviceId: string): Promise<Service> => {
  const response = await fetch(`${SERVICES_API_URL}/${serviceId}`);
  const service = await response.json();

  return service;
};
