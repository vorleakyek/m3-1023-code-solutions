import type { User } from './data-types';

type Props = {
  user: User;
  onClick?: (user: User) => void;
};
export function UserCard({ user, onClick }: Props) {
  const emailHref = `mailto:${user.email}`;
  return (
    <>
      <h3 onClick={() => onClick?.(user)}>{user.name}</h3>
      <h4>{user.company.name}</h4>
      <p>
        Contact:
        <a target="_blank" rel="noopener noreferrer" href={emailHref}>
          {user.email}
        </a>
      </p>
    </>
  );
}
