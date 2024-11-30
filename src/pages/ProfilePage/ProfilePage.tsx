import { useParams } from 'react-router-dom';

export const ProfilePage = (): JSX.Element => {
  const { userId } = useParams();

  return <p>Profile {userId}</p>;
};
