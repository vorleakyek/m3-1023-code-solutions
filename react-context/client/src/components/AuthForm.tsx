import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type Auth, signIn, signUp } from '../lib';

type Props = {
  action: 'sign-up' | 'sign-in';
  onSignIn: (auth: Auth) => void;
};
export function AuthForm({ action, onSignIn }: Props) {
  const navigate = useNavigate();
  const [error, setError] = useState<unknown>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    async function handleSignUp(username: string, password: string) {
      await signUp(username, password);
      navigate('/sign-in');
    }
    async function handleSignIn(username: string, password: string) {
      const auth = await signIn(username, password);
      if (auth.user && auth.token) {
        onSignIn(auth);
      }
    }
    event.preventDefault();
    if (event.currentTarget === null) throw new Error();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const username = entries.username as string;
    const password = entries.password as string;
    try {
      if (action === 'sign-up') {
        handleSignUp(username, password);
      } else {
        handleSignIn(username, password);
      }
    } catch (err) {
      setError(err);
    }
  }

  const alternateActionTo = action === 'sign-up' ? '/sign-in' : '/sign-up';
  const alternateActionText =
    action === 'sign-up' ? 'Sign in instead' : 'Register now';
  const submitButtonText = action === 'sign-up' ? 'Register' : 'Log In';
  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Username:
          <input
            required
            autoFocus
            type="text"
            name="username"
            className="form-control bg-light"
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password:
          <input
            required
            type="password"
            name="password"
            className="form-control bg-light"
          />
        </label>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <small>
          <Link className="text-muted" to={alternateActionTo}>
            {alternateActionText}
          </Link>
        </small>
        <button type="submit" className="btn btn-primary">
          {submitButtonText}
        </button>
      </div>
      <>
        {error && (
          <div style={{ color: 'red' }}>
            Error: {error instanceof Error ? error.message : 'Unknown Error'}
          </div>
        )}
      </>
    </form>
  );
}
