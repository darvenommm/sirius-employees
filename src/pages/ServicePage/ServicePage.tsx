import { useParams } from 'react-router-dom';

export const ServicePage = (): JSX.Element => {
  const { serviceId } = useParams();

  return <p>Service {serviceId ?? 'sdflk'}</p>;
};
