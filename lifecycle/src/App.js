import { useState } from 'react';
import LifeCycleSample from "./LifeCycleSample";
import ErrorComponent from './ErrorComponent';

const App = () => {
  const[color, setColor] = useState('red');

  return (
    <>
      <ErrorComponent>
        <LifeCycleSample color={color} />
      </ErrorComponent>
      <button type="button" onClick={() => setColor('red')}>RED</button>
      <button type="button" onClick={() => setColor('black')}>BLACK</button>
    </>
  );
};

export default App;