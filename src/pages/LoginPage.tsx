import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../auth/hooks/use-user-auth.hook';

export default function LoginPage() {
  const { logIn, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      console.log(JSON.stringify({m:'debug', o:'let us debugg'}));
      const userCredential = await logIn();
      console.log(JSON.stringify({m:'debug', o:'login finished', userCredential}));
    } catch (error: any) {
      console.log(JSON.stringify({error}));
    }
  };

  useEffect(() => {
    if (user) {
      console.log(JSON.stringify({m:'debug', o:'can we navigate', user}));
      navigate('/events');
    }
  }, [navigate, user]);

  return (
    <div className="mx-2">
      <h1>Please Sign In</h1>
      <Button label="Sign in" onClick={handleLogin} icon="pi pi-sign-in" className="p-button-success p-button-outlined p-button-sm" />
    </div>
  );
}
