import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Jazzicon, BASE_STYLES } from '../.';
import { ChangeEvent, useState } from 'react';

const ModifiedJazzicon = styled(Jazzicon)({
  ...BASE_STYLES,
  width: 100,
  height: 100,
});

const Input = styled.input({
  width: 300,
  display: 'block',
});

const App = () => {
  const [address, setAddress] = useState(
    '0xBAc675C310721717Cd4A37F6cbeA1F081b1C2a07'
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setAddress(text);
  };

  return (
    <>
      <p>
        Put an Ethereum address here:
        <Input type={'text'} defaultValue={address} onChange={handleChange} />
      </p>
      <ModifiedJazzicon address={address} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
