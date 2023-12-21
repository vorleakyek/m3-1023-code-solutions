/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import './HomePage.css';

export function HomePage() {
  /* TODO: Grab `user` from `AppContext` */
  // const user = undefined;
  const {user} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/sign-in');
  }, [user, navigate]);

  return (
    <div className="gif-container">
      <iframe
        title="Rick Roll"
        src="https://giphy.com/embed/Ju7l5y9osyymQ"
        width="100%"
        height="100%"
        className="gif"
        style={{ border: 0 }}
      />
    </div>
  );
}
