# TDEX DASHBOARD


## Getting started

### Installation

Fetch node dependencies:

```
yarn install
```

### Set up Tauri

Tauri GH: https://github.com/tauri-apps/tauri

You need to [set up your environment](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment) depending on your OS.


### Install the Tauri CLI

```
cargo install tauri-cli --version 1.0.0-beta.7
```

### Build

Use `tauri:build` script to compile a .deb and .AppImage _production_ file.

```
yarn tauri:build
```

You can find the files inside `src-tauri/target/release/...`.

### Dev

```
yarn tauri:dev
```

You can either visit `http://localhost:3003` for the web version of the app or run the `src-tauri/target/debug/app` file for the desktop _debug_ version.
