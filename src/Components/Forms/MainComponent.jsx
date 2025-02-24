import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const MainComponent = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      {isSignUp ? <SignUp /> : <SignIn />}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
      </button>
    </div>
  );
};

export default MainComponent;
