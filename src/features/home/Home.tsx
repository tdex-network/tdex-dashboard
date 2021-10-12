import React from 'react';

import { CloseMarketForm } from '../operator/CloseMarketForm';
import { DropMarketForm } from '../operator/DropMarketForm';
import { FeeAddress } from '../operator/FeeAddress';
import { FeeBalance } from '../operator/FeeBalance';
import { Info } from '../operator/Info';
import { ListFeeAddresses } from '../operator/ListFeeAddresses';
import { NewMarketForm } from '../operator/NewMarketForm';
import { OpenMarketForm } from '../operator/OpenMarketForm';
import { Seed } from '../walletUnlocker/Seed';
import { SetPassword } from '../walletUnlocker/SetPassword';

export const Home = (): JSX.Element => {
  return (
    <>
      <h1>Save Your Mnemonic</h1>
      <Seed />

      <h1>Choose A Password</h1>
      <SetPassword />

      <h1>New Market</h1>
      <NewMarketForm />

      <h1>Open A Market</h1>
      <OpenMarketForm />

      <h1>Close A Market</h1>
      <CloseMarketForm />

      <h1>Drop A Market</h1>
      <DropMarketForm />

      <h1>Info</h1>
      <Info />

      <h1>New Fee Address</h1>
      <FeeAddress />

      <h1>List Fee Addresses</h1>
      <ListFeeAddresses />

      <h1>Fee Balance</h1>
      <FeeBalance />
    </>
  );
};
