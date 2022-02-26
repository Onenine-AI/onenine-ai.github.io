---
id: how-to-setup-real-time-predicitons
title: How to setup real time predicitons?
sidebar_label: How to setup real time predicitons?
slug: /realtime-prediction/how-to-setup-real-time-predicitons/
sidebar_position: 2
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


The table in the Real Time Predictions page lists all the `AI Projects` and `Discovery Wizard` created so far. 



![API Page](../../static/img/docs/realtime-api/apipage.jpg "API Page")

  1. **Project Name**  
        The title of the project
  2. **Project Type**  
        Type of the project which distinguishes the project between AI and Discovery Projects
  3. **Status** 
        Tells if the project is Online or Offline
        - Online indicates that an API has been created already for the project and the API is up and running.
        - Offline indicates that no API has been created for the project
  4.  **Actions**
        The Actions column provides the users with three options
        - <Highlight color="#2dce89">Create API</Highlight> button creates and reserves a new port for the project
        - <Highlight color="#6478e5">Use API</Highlight> button spins up the API in the reserved port
        - <Highlight color="#f5365c">Delete API</Highlight> button deletes the reserved port. A new port can be created using the <Highlight color="#2dce89">Create API</Highlight> button if needed.

:::info 

Real Time Prediction feature for Smart Models will be available in upcoming release.

:::