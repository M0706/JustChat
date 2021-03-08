import { Auth } from 'aws-amplify';

const SignOut = () => {
    const signOut = async () => {
      try {
        //console.log("sdds")
        await Auth.signOut({ global: true });
      } 
      catch (error) {
        console.log('error signing out: ', error);
      }
    };
    signOut();
    return null;
  };

export default SignOut;