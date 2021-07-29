# Canvas App

## Getting Started

First you must compile and migrate the contracts

```bash
truffle develop
> compile
> migrate
```

In another terminal run the frontend client

To install the dependencies

```bash
cd client && npm install
```

To, run the frontend client

```bash
cd client && npm run dev
# or
cd client && yarn dev
```

For development purposes, go to Advanced Settings on Metmask and enable custom nonce and whenever you get and error try adding the right nonce, also try varying your gas prices and choosing the optimal one.