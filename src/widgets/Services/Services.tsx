import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';

import { getServices } from '@entities/services';
import { paths } from '@shared/constants/routing';

import classes from './Services.module.scss';

export const Services = (): JSX.Element => {
  const { data: services, isLoading, error } = useSWR('services', getServices);

  if (isLoading) return <Loader />;
  if (error) return <Text>Какая-то сетевая ошибка</Text>;

  return (
    <Grid className={classes.services} as="ul" cols={3} colGap="3xl" rowGap="3xl">
      {services!.map(
        ({ id, name, description, image }): JSX.Element => (
          <GridItem key={id} as="li">
            <Card
              className={classes.card}
              verticalSpace="m"
              horizontalSpace="m"
              form="round"
              shadow
            >
              <img className={classes.image} src={image} alt={name} title={name} width="100" />
              <Text as="h2">{name}</Text>
              <Text>{description}</Text>
              <Link className={classes.link} to={paths.service(id)} />
            </Card>
          </GridItem>
        ),
      )}
    </Grid>
  );
};
