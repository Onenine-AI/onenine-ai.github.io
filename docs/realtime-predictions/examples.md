---
id: realtime-prediction-examples
title: Real Time Prediction Examples
sidebar_label: Examples
slug: /realtime-predictions/realtime-prediction-examples/
sidebar_position: 3
---
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

## Steps to create and use an API

1. Go to OneNine Platform
2. Click on <Highlight color="#5e72e4">Real Time Predictions</Highlight> in the sidebar
3. Find the project to which the API has to be created
4. Click on <Highlight color="#2dce89">Create API</Highlight> button against the desired project in the API Actions column.
5. A few seconds later, a pop up will appear which will display the API key necessary to access the API. Copy that API key to your clipboard and then click on <Highlight color="#3085d6">OK</Highlight>. 

:::info Note
This key is important to access the API in future. Hence please make a note of this key and do not share it with anyone.
:::

6. You can see the status column changing from Offline to Online. Now click on the <Highlight color="#6478e5">Use API</Highlight> button.
7. A pop up will appear which will ask for your username and the API Key. Enter your username and paste the API key. You will be able to see the API along with a few information about the model once you enter the details correctly
8. Click on `Authorize` to authorize your session
9. Click on `Predict` to perform predictions over the model
10. Click on `Batch Predict` to predict using testing data files
11. Click on `View API integration Document` to view the Integration document page

:::info API Integration Document
The API integration document gives a detailed picture of how the API is structured. It displays information such as
  - The port in which the API is running
  - The URLs available in the API
  - The API Schemas

This page explains all the micro details to give a robust understanding and clean user testing ability.
:::
