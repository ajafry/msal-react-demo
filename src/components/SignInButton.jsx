import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

export const SignInButton = () => {
    const { instance }  = useMsal();
    const handleSignin = () => {
        console.log(`About to initiated sign-in`);
        instance.loginPopup(loginRequest)
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Button color="inherit" onClick={handleSignin}>Sign in</Button>
    )
};