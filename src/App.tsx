import React, { useEffect } from 'react';

import Shell from './common/Shell';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  useEffect(() => {
    document.addEventListener('keypress', function (event) {
      if (event.metaKey && event.key === 'c') {
        document.execCommand('copy');
        event.preventDefault();
      }
      if (event.metaKey && event.key === 'v') {
        document.execCommand('paste');
        event.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
    </>
  );
};
