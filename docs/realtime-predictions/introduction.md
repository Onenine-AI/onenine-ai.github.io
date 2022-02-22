---
id: realtime-prediction-intro
title:  Real Time Prediction Introduction
sidebar_label: Introduction
slug: /realtime-predictions/realtime-prediction-intro/
sidebar_position: 1
---

## What does Prediction mean in Machine Learning?

After successfully building a Machine Learning/Deep Learning/Time series model, the primary question arises, *How to use the model in real time?* 

Well, we perform predictions on the built model. “Prediction” refers to the output of an algorithm after it has been trained on a historical dataset and applied to new data when forecasting the likelihood of a particular outcome, such as whether or not a customer will churn in 30 days.

The word "Prediction" itself can be quite mis-leading. Most of the times we would not be trying to predict the future outcome but to see the outcome of the inputs that are unseen during the model training process. For example, whether or not an already occurred transaction is a fraudulent transaction or not.

In our platform, we bring in the concept of API's to perform predictions on a model

## What is an API?
API is the acronym for Application Programming Interface. To put in simple words, an API is a software intermediary that allows two applications to talk to each other. 

![API](../../static/img/tutorials/realtime-api/api.png "API")

In the Real Time API Predictions service of the OneNineAI platform, the trained model will be served as an API where in the user can enter the values (or) upload a test file to perform predictions on the model.