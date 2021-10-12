import React from 'react';

export const Navbar = (): JSX.Element => {
  const handleConnect = () => {
    console.log('connect');
  };

  return (
    <header>
      <div className="navbar mb-2 text-neutral-content bg-neutral shadow-lg">
        <div className="flex-none mx-2 px-2">
          <span className="text-lg font-bold">TDEX Daemon UI</span>
        </div>
        <div className="flex-1 mx-2 px-2">
          <div className="hidden items-stretch lg:flex">
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
            <a className="btn btn-ghost btn-sm rounded-btn">About</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </div>
        </div>
        <div className="dropdown dropdown-end flex-none">
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
              <button className="btn btn-ghost" onClick={handleConnect}>
                Connect
              </button>
            </li>
            <li>
              <button className="btn btn-ghost text-left">Disconnect</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
