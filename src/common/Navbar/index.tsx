import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/tdex-logo.png';
import { NewMarketForm } from '../../features/operator/NewMarketForm';
import { UnlockModalForm } from '../../features/walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from '../../features/walletUnlocker/walletUnlocker.api';
import { SET_PASSWORD_ROUTE, MARKETS_ROUTE } from '../../routes/constants';

export const Navbar = (): JSX.Element => {
  const { data: isReady } = useIsReadyQuery();
  const history = useHistory();

  const handleClickMarkets = () => {
    history.push(MARKETS_ROUTE);
  };

  return (
    <header>
      <p className="text-sm font-light text-right mr-4 mt-2">{`Status Unlocked ${isReady?.isUnlocked} - Initialized ${isReady?.isInitialized} - Synced ${isReady?.isSynced}`}</p>
      <div className="navbar mx-2 mt-2 mb-8 text-neutral-content shadow-lg rounded-box">
        <div className="mx-2 px-2 navbar-start h-10">
          <a href="/" className="h-full mr-8">
            <img src={logo} alt="logo" className="h-full" />
          </a>
          <a href="/" className="btn btn-accent mx-2">
            Overview
          </a>
          <button className="btn btn-accent mx-2" onClick={handleClickMarkets}>
            Markets
          </button>
        </div>
        <div className="navbar-end">
          <a href="/settings" className="btn btn-accent mx-2">
            Settings
          </a>
          <label htmlFor="add-market-modal" className="btn btn-accent modal-button">
            Add Market
          </label>
          <input type="checkbox" id="add-market-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="modal-action">
                <label htmlFor="add-market-modal" className="btn btn-accent">
                  Close
                </label>
              </div>
              <NewMarketForm />
            </div>
          </div>

          <div className="dropdown dropdown-end ml-8">
            <button tabIndex={0} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content rounded-box top-12 p-2 w-52 bg-base-100 shadow">
              <li>
                <a href={SET_PASSWORD_ROUTE} className="btn btn-ghost mx-2 mb-1">
                  Connect
                </a>
              </li>
              <li>
                <label htmlFor="unlock-modal" className="btn btn-ghost modal-button mb-1">
                  Unlock Wallet
                </label>
              </li>
              <li>
                <button className="btn btn-ghost text-left">Disconnect</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <UnlockModalForm />
    </header>
  );
};
