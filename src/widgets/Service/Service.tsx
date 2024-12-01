import useSWR from 'swr';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';

import { getService } from '@entities/services';

import classes from './Service.module.scss';

interface ServiceProperties {
  readonly serviceId: string;
}

export const Service = ({ serviceId }: ServiceProperties): JSX.Element => {
  const {
    data: service,
    isLoading,
    error,
  } = useSWR(['service', serviceId], ([_, serviceId]) => getService(serviceId));

  if (isLoading) return <Loader />;
  if (error) return <Text>Какая-то сетевая ошибка</Text>;

  const { name, description, image } = service!;

  return (
    <Card className={classes.card} verticalSpace="m" horizontalSpace="m" form="round" shadow>
      <img className={classes.image} src={image} alt={name} title={name} width="100" />
      <Text as="h2">{name}</Text>
      <Text>{description}</Text>
    </Card>
  );
};
