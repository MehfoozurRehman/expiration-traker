# Expiration Tracker

A React Native and Expo starting point for a mobile app that will track expiry dates for household food and products.

**Status:** Stub. The project has four real source files, and the two screens are a static layout with placeholder content. The login button only navigates to the home screen, and no expiry data is stored or shown.

## The problem

The app is meant to help people keep track of when items in their home expire, so less food is thrown away. The code does not yet do this. The screens are a layout for a login step and a list of items, both with placeholder data.

## What it does

- **Navigation shell** (`App.js`): a native stack with a `Login` screen followed by a `Home` screen. The default headers are turned off so each screen draws its own layout.
- **Login screen** (`screens/Login.js`): a logo, a "Get Started" heading, a phone number field and a Login button. The field is not connected to any state, and the button only navigates to `Home`. Nothing is checked or stored.
- **Home list** (`screens/Home.js`): a scrollable list of twenty identical item cards, each showing a stock image, the title "Products" and the text "Expiry Date". The card data is hard-coded.
- **Shared palette** (`constants/colors.js`): three colours (a coral primary, white and near-black) used across both screens.

## How it's built

- React Native with Expo (`expo` ~45.0.8, `expo start` for the development server), built with `babel-preset-expo`.
- React Navigation 6 with the native stack navigator (`@react-navigation/native`, `@react-navigation/native-stack`).
- Styling is inline `style` objects with values taken from `constants/colors.js`. There is no style system or theme layer yet.
- `react-native-web` is included, so the same screens can run in a browser.

## Running it locally

The `package.json` scripts are:

```
pnpm install      # or: npm install
npm start         # expo start
npm run android   # expo start --android
npm run ios       # expo start --ios
npm run web       # expo start --web
```

Use the Expo Go app to scan the QR code shown by `npm start`, or open an emulator or simulator.

## What's left

- No expiry data model, no add-item form and no storage. The item list is a fixed set of placeholders.
- The login screen does not read the phone number field and does not authenticate anyone.
- No notifications or reminders are implemented.
- The dependency versions look mismatched. `expo` is pinned to ~45.0.8, which targets React Native 0.68, but `react-native` is pinned to 0.83.1, and `react` is 17.0.2. These need reconciling before the app can run reliably.
- `ProductCard` takes an empty destructured parameter and renders the same text for every card.
- No tests.
- The previous README described category sorting, shelf-life indicators and reminders. The code does not contain any of these, so they have been removed from this guide.
