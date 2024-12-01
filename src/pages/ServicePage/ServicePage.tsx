import { useParams } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';

import { Service } from '@widgets/Service/Service';

export const ServicePage = (): JSX.Element => {
  const { serviceId } = useParams();

  if (!serviceId) return <Text>Не найден serviceId</Text>;

  return <Service serviceId={serviceId} />;
};
