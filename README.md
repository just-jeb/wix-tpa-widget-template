# Wix TPA Dashboard Widget template

This is a template repository for a Wix Dashboard widget provided a Wix Third Party Application. 

![image](https://user-images.githubusercontent.com/9823087/196634216-5f57ffba-d050-4007-a95d-4be393d27a0a.png)

## Development

The widget is developed using React, [Stylable](https://stylable.io/) and [Wix Style React](https://www.wix-style-react.com/) component library. 

To run it locally use `npm start`.

## Wix Dashboard SDK 

The widget should be hosted on a 3rd party app server and is rendered within Wix Back Office host. In order to communicate with the host the widget uses [`@wix/dashboard-sdk`](https://www.npmjs.com/package/@wix/dashboard-sdk) NPM package.  

  - `observeState` allows the widget to access the props passed by the host (such as `onLoaded`)
  - `navigate` allows to navigate within the Wix Dashboard using page ID. In order to navigate to your TPA Dashboard page you need to know its ID.
