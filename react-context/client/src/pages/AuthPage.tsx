import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBolt } from 'react-icons/fa';
import { AuthForm } from '../components/AuthForm';
import { AppContext } from '../components/AppContext';

type Props = {
  action: 'sign-in' | 'sign-up';
};
export function AuthPage({ action }: Props) {
  const navigate = useNavigate();
  /* TODO: Grab `user` and `handleSignIn` from `AppContext` */
  // const user = undefined;
  // const handleSignIn = () => {};

  const {user, handleSignIn} = useContext(AppContext)

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const welcomeMessage =
    action === 'sign-in'
      ? 'Please sign in to continue'
      : 'Create an account to get started!';
  return (
    <div className="row pt-5 align-items-center">
      <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-4 offset-xl-4">
        <header className="text-center">
          <h2 className="mb-2">
            <FaBolt className="mr-2" />
            Awesome App
          </h2>
          <p className="text-muted mb-4">{welcomeMessage}</p>
        </header>
        <div className="card p-3 ">
          <AuthForm key={action} action={action} onSignIn={handleSignIn} />
        </div>
      </div>
    </div>
  );
}
