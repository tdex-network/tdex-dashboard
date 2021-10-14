import React from 'react';

import { Seed } from './Seed';
import { SetPassword } from './SetPassword';

export const Connect = (): JSX.Element => {
  return (
    <>
      <h1>Connect</h1>
      <div className="mb-12">
        <h2>Save Your Mnemonic</h2>
        <Seed />
      </div>

      <h2>Choose A Password</h2>
      <SetPassword />
    </>
  );
};
