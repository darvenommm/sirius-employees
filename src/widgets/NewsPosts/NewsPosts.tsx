import useSWR from 'swr';
import { Loader } from '@consta/uikit/Loader';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import { getNewsPosts } from '@entities/newsPosts';

import classes from './NewsPosts.module.scss';

export const NewsPosts = (): JSX.Element => {
  const { data: newsPosts, error, isLoading } = useSWR('newsPosts', getNewsPosts);

  if (isLoading) return <Loader />;
  if (error) return <Text>Какая-то сетевая ошибка</Text>;

  return (
    <ul className={classes.newsPosts}>
      {newsPosts!.map(
        ({ name, description, createdAt }): JSX.Element => (
          <Card
            key={name}
            as="li"
            className={classes.card}
            verticalSpace="m"
            horizontalSpace="m"
            form="round"
            shadow
          >
            <Text as="h2">{name}</Text>
            <Text>{description}</Text>
            <Text className={classes.createdAt}>{createdAt}</Text>
          </Card>
        ),
      )}
    </ul>
  );
};
