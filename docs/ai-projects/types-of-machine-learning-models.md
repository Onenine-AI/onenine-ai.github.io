---
id: ml-model-types
title: Types of Machine Learning Models
sidebar_label: Types of Machine Learning Models
slug: /ai-projects/ml-model-types/
sidebar_position: 1
---

---
# Types of Machine Learning Models
---

Currently we support 8 machine learning algorithms across 4 different categories :
1. [Regression](/docs/ai-projects/ml-model-types#regression)
    * [Linear](/docs/ai-projects/ml-model-types#linear)
    * [Logistic](/docs/ai-projects/ml-model-types#logistic)
2. [Clustering](/docs/ai-projects/ml-model-types#clustering)
    * [KMeans](/docs/ai-projects/ml-model-types#kmeans)
    * [Recommendation Engine](/docs/ai-projects/ml-model-types#recommendation-engine)
3. [Classification](/docs/ai-projects/ml-model-types#classification)
    * [DTree](/docs/ai-projects/ml-model-types#dtree)
    * [Random Forest](/docs/ai-projects/ml-model-types#random-forest)
4. [Time Series Forecasting](/docs/ai-projects/ml-model-types#time-series-forecasting)
    * [Prophet](/docs/ai-projects/ml-model-types#prophet)
    * [Vector Autoregression](/docs/ai-projects/ml-model-types#vector-autoregression)

## Regression
---
Regression is a supervised learning technique which helps in finding the correlation between variables and enables us to predict the continuous output variable based on the one or more predictor variables.

### Linear

Linear regression algorithm shows a linear relationship between a dependent variable (target or y) and one or more independent variables(x), hence called as linear regression. It finds how the value of the dependent variable is changing according to the value of the independent variable. It’s used to predict values within a continuous range, (e.g. a number - sales, price) rather than trying to classify them into categories (e.g. cat, dog).

*Parameters:*

**Target Variable:** This is the variable/column whose value we want to predict.

**Input Columns:** These are the variables/columns which are used to predict the value of the target variable. You can either manually specify the input columns or let our algorithm decide internally the variables that are important for the problem.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Comparison Table:** This table shows a comparison of the trained model with all the available machine learning models. Generating the comparison table would increase the result's generation time.

### Logistic

Logistic Regression is much similar to the Linear Regression except that how they are used. Linear Regression is used for solving Regression problems (e.g. sales, price), whereas Logistic regression is used for solving the classification problems (e.g. cat, dog).

*Parameters:*

**Target Variable:** This is the variable/column whose value we want to predict.

**Input Columns:** These are the variables/columns which are used to predict the value of the target variable. You can either manually specify the input columns or let our algorithm decide internally the variables that are important for the problem.

**Fix Imbalance:** Training dataset with unequal distribution of target class can be balanced using this parameter. Over Sample increases the minority class to be equal to majority class, while under sample reduces the majority class to be equal to minority class.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Fill NA:** Fill the missing cells in the dataset.

**Fill NA Value:** The value with which the missing cells of the dataset wll be filled if Fill NA parameter is selected.

**Comparison Table:** This table shows a comparison of the trained model with all the available machine learning models. Generating the comparison table would increase the result's generation time.

## Clustering
---
Clustering or cluster analysis is a machine learning technique, which groups the unlabelled dataset. It can be defined as a way of grouping the data points into different clusters, consisting of similar data points.

### KMeans

It allows us to cluster the data into different groups and a convenient way to discover the categories of groups in the unlabeled dataset on its own. It divides the unlabeled dataset into k different clusters in such a way that each cluster only contains the data having similar properties.

*Parameters:*

**Target Variable:** This is the variable/column whose value we want to predict.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Fill NA:** Fill the missing cells in the dataset.

**N Init:** Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n_init consecutive runs in terms of inertia.

**Max_Iter:** Maximum number of iterations of the k-means algorithm for a single run.

**N_Clusters:** The number of clusters to form as well as the number of centroids to generate.

### Recommendation Engine

A recommendation engine filters the data using different algorithms and recommends the most relevant items to users. It first captures the past behavior of a customer and based on that, recommends products/content which the users might be likely to buy/watch.

*Parameters:*

**Products/Items Column:** This column has all the items that are included in each basket/transaction. It is product column that you want to recommend to your customer.

**Transactions/Baskets Column:** This column identifies the individual basket/transaction. It is used to determines relationships of what products were purchased with which other product(s).

**Minimum Support:** A float between 0 and 1 for minimum support of the itemsets returned. The support is computed as the fraction transactions_where_item(s)_occur / total_transactions.

## Classification
---
In machine learning, classification refers to a predictive modeling problem where a class label is predicted for a given example of input data. Examples of classification problems include: Given an example, classify if it is spam or not.

### DTree

A decision tree is a graphical representation for getting all the possible solutions to a problem/decision based on given conditions. It usually mimic human thinking ability while making a decision, so it is easy to understand. A decision tree simply asks a question at each steps, and based on the answer (Yes/No), it further split the tree into subtrees. Based on a sequence of questions it arrives at the final decision for the question asked.

*Parameters:*

**Target Variable:** This is the variable/column whose value we want to predict.

**Input Columns:** These are the variables/columns which are used to predict the value of the target variable. You can either manually specify the input columns or let our algorithm decide internally the variables that are important for the problem.

**Fix Imbalance:** Training dataset with unequal distribution of target class can be balanced using this parameter. Over Sample increases the minority class to be equal to majority class, while under sample reduces the majority class to be equal to minority class.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Fill NA:** Fill the missing cells in the dataset.

**Fill NA Value:** The value with which the missing cells of the dataset wll be filled if Fill NA parameter is selected.

**Comparison Table:** This table shows a comparison of the trained model with all the available machine learning models. Generating the comparison table would increase the result's generation time.

### Random Forest

Random Forest is a classifier that contains a number of decision trees on various subsets of the given dataset and takes the average of the predictions of each decision tree to improve the predictive accuracy of that dataset.

*Parameters:*

**Target Variable:** This is the variable/column whose value we want to predict.

**Input Columns:** These are the variables/columns which are used to predict the value of the target variable. You can either manually specify the input columns or let our algorithm decide internally the variables that are important for the problem.

**Fix Imbalance:** Training dataset with unequal distribution of target class can be balanced using this parameter. Over Sample increases the minority class to be equal to majority class, while under sample reduces the majority class to be equal to minority class.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Fill NA:** Fill the missing cells in the dataset.

**Fill NA Value:** The value with which the missing cells of the dataset wll be filled if Fill NA parameter is selected.

**N_Estimators:** The number of trees in trained random forest model.

**Comparison Table:** This table shows a comparison of the trained model with all the available machine learning models. Generating the comparison table would increase the result's generation time.

## Time Series Forecasting
---
Time series forecasting is the process of analyzing time series data using statistics and modeling to make predictions and inform strategic decision-making.

### Prophet

Prophet is a time series forecast model created by Facebook's data science team. It is an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works well with time series datasets that have strong seasonal effects and several seasons of historical data. Use Prophet for general use cases.

*Parameters:*

**Date Column:** Date column is the column referring to the date variable.

**Target:** This is the variable/column whose value we want to predict.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Obeservation Type:** Observation type refers to the time period of the data. If the data increments minute by minute, day by day, month by month, etc. please select that option.

**Daily:** If your data is showing trends that are similar day by day, use daily.

**Weekly:** If your data is showing trends that occur weekly, or trends that are similar week after week, use weekly.

**Monthly:** If your data is showing trends that occur monthly, or trends that are similar month after month, use monthly.

**Yearly:** If your data is showing trends that occur yearly, or trends that are similar every year use yearly.

### Vector Autoregression

Vector Autoregression (VAR) is a forecasting algorithm that can be used when two or more time series influence each other. That is, the relationship between the time series involved is bi-directional.

*Parameters:*

**Date Column:** Date column is the column referring to the date variable.

**Target:** This is the variable/column whose value we want to predict.

**Split Value:** This is the ratio of amount of data to be used for training the model and amount of data for testing the model.

**Predictions No.:** The whole number value of future predictions that will be calculated.

**Difference:** The amount of times you take the difference of the dataset prior to training. Taking the difference makes the data stationary so that the algorithm can make more accurate predictions. To use a value determined by the algorithm enter -1.

**Lags:** The amount of lags used determines the length of a delay in which the algrothim compares a time series to itself. To use a value determined by the algorithm enter 0.