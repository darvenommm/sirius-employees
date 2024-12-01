import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Loader } from '@consta/uikit/Loader';

import { getProfile } from '@entities/auth/api/getProfile';
import { selectAccessToken } from '@entities/auth';

import classes from './Profile.module.scss';

export const Profile = (): JSX.Element => {
  const accessToken = useSelector(selectAccessToken);
  const { isLoading, error, data: profile } = useSWR(['profile'], () => getProfile(accessToken));

  if (isLoading) return <Loader />;
  if (error) return <Text>Какая-то сетевая ошибка</Text>;

  const { firstName, username, email, image } = profile!;

  return (
    <Card className={classes.card} verticalSpace="m" horizontalSpace="m" form="round" shadow>
      <img
        className={classes.image}
        src={image}
        alt="Твоя аватарка."
        title="Твоя аватарка"
        width="100"
      />
      <Text as="h2">
        {firstName} | {username}
      </Text>
      <Text>{email}</Text>
    </Card>
  );
};
