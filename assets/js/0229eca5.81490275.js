"use strict";(self.webpackChunkonenine_ai_github_io=self.webpackChunkonenine_ai_github_io||[]).push([[9827],{6358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(3117),i=(a(7294),a(3905));const o={id:"use-case-driven-models",title:"Use Case driven Models",sidebar_label:"Use Case driven Models",slug:"/smart-models/use-case-driven-models/",sidebar_position:2},r=void 0,s={unversionedId:"smart-models/use-case-driven-models",id:"smart-models/use-case-driven-models",title:"Use Case driven Models",description:"---",source:"@site/docs/smart-models/use-case-driven-models.md",sourceDirName:"smart-models",slug:"/smart-models/use-case-driven-models/",permalink:"/docs/smart-models/use-case-driven-models/",draft:!1,editUrl:"https://github.com/Onenine-AI/onenine-ai.github.io/tree/dev/docs/smart-models/use-case-driven-models.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"use-case-driven-models",title:"Use Case driven Models",sidebar_label:"Use Case driven Models",slug:"/smart-models/use-case-driven-models/",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/smart-models/smart-models-intro/"},next:{title:"Examples",permalink:"/docs/smart-models/smart-models-examples/"}},l={},d=[{value:"Classification",id:"classification",level:2},{value:"Regression",id:"regression",level:2},{value:"Differences between Regression and Classification",id:"differences-between-regression-and-classification",level:3},{value:"Natural Language Processing",id:"natural-language-processing",level:2},{value:"Anomaly Detection",id:"anomaly-detection",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"use-case-driven-models"},"Use Case driven Models"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Currently we support 4 use cases :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/smart-models/use-case-driven-models#classification"},"Classification")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/smart-models/use-case-driven-models#regression"},"Regression")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/smart-models/use-case-driven-models#natural-language-processing"},"Natural Language Processing")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/smart-models/use-case-driven-models#anomaly-detection"},"Anomaly Detection"))),(0,i.kt)("h2",{id:"classification"},"Classification"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is the Classification Algorithm?")),(0,i.kt)("p",null,"The Classification algorithm is a Supervised Learning technique that is used to identify the category of new observations on the basis of training data. In Classification, a program learns from the given dataset or observations and then classifies new observation into a number of classes or groups. Such as, Yes or No, 0 or 1, Spam or Not Spam, cat or dog, etc. Classes can be called as targets/labels or categories."),(0,i.kt)("p",null,'Unlike regression, the output variable of Classification is a category, not a value, such as "Green or Blue", "fruit or animal", etc. Since the Classification algorithm is a Supervised learning technique, hence it takes labeled input data, which means it contains input with the corresponding output.'),(0,i.kt)("p",null,"The main goal of the Classification algorithm is to identify the category of a given dataset, and these algorithms are mainly used to predict the output for the categorical data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"classification",src:a(4070).Z,width:"444",height:"382"})),(0,i.kt)("h2",{id:"regression"},"Regression"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is the Regression Algorithm?")),(0,i.kt)("p",null,"Regression analysis is a statistical method to model the relationship between a dependent (target) and independent (predictor) variables with one or more independent variables. More specifically, Regression analysis helps us to understand how the value of the dependent variable is changing corresponding to an independent variable when other independent variables are held fixed. It predicts continuous/real values such as temperature, age, salary, price, etc."),(0,i.kt)("p",null,"Regression is a supervised learning technique which helps in finding the correlation between variables and enables us to predict the continuous output variable based on the one or more predictor variables. It is mainly used for prediction, forecasting, time series modeling, and determining the causal-effect relationship between variables."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"regression",src:a(6904).Z,width:"500",height:"400"})),(0,i.kt)("h3",{id:"differences-between-regression-and-classification"},"Differences between Regression and Classification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Regression"),(0,i.kt)("th",{parentName:"tr",align:null},"Classification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In Regression, the output variable must be of continuous nature or real value."),(0,i.kt)("td",{parentName:"tr",align:null},"In Classification, the output variable must be a discrete value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The task of the regression algorithm is to map the input value (x) with the continuous output variable(y)."),(0,i.kt)("td",{parentName:"tr",align:null},"The task of the classification algorithm is to map the input value(x) with the discrete output variable(y).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Regression Algorithms are used with continuous data."),(0,i.kt)("td",{parentName:"tr",align:null},"Classification Algorithms are used with discrete data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In Regression, we try to find the best fit line, which can predict the output more accurately."),(0,i.kt)("td",{parentName:"tr",align:null},"In Classification, we try to find the decision boundary, which can divide the dataset into different classes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Regression algorithms can be used to solve the regression problems such as Weather Prediction, House price prediction, etc."),(0,i.kt)("td",{parentName:"tr",align:null},"Classification Algorithms can be used to solve classification problems such as Identification of spam emails, Speech Recognition, Identification of cancer cells, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The regression Algorithm can be further divided into Linear and Non-linear Regression."),(0,i.kt)("td",{parentName:"tr",align:null},"The Classification algorithms can be divided into Binary Classifier and Multi-class Classifier.")))),(0,i.kt)("h2",{id:"natural-language-processing"},"Natural Language Processing"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Natural Language Processing?")),(0,i.kt)("p",null,"NLP stands for Natural Language Processing, which is a part of Computer Science, Human language, and Artificial Intelligence. It is the technology that is used by machines to understand, analyse, manipulate, and interpret human's languages. It helps developers to organize knowledge for performing tasks such as translation, automatic summarization, Named Entity Recognition (NER), speech recognition, relationship extraction, and topic segmentation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NLP helps users to ask questions about any subject and get a direct response within seconds."),(0,i.kt)("li",{parentName:"ul"},"NLP offers exact answers to the question means it does not offer unnecessary and unwanted information."),(0,i.kt)("li",{parentName:"ul"},"NLP helps computers to communicate with humans in their languages."),(0,i.kt)("li",{parentName:"ul"},"It is very time efficient."),(0,i.kt)("li",{parentName:"ul"},"Most of the companies use NLP to improve the efficiency of documentation processes, accuracy of documentation, and identify the information from large databases.")),(0,i.kt)("p",null,"\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ",(0,i.kt)("img",{alt:"nlp",src:a(5963).Z,width:"372",height:"340"})),(0,i.kt)("h2",{id:"anomaly-detection"},"Anomaly Detection"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Anomaly Detection?")),(0,i.kt)("p",null,"Anomaly detection is a process of finding those rare items, data points, events, or observations that make suspicions by being different from the rest data points or observations. Anomaly detection is also known as outlier detection."),(0,i.kt)("p",null,"Generally, anomalous data is related to some kind of problems such as bank fraud, medical problems, malfunctioning equipment, etc."),(0,i.kt)("p",null,"Finding an anomaly is the ability to define what is normal? For example, in the below image, the yellow vehicle is an anomaly among all red vehicles."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"anomaly",src:a(9824).Z,width:"639",height:"349"})))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anomaly-69dc2c8e33bd136310f3612c17e4d92a.png"},4070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/classification-d9d91a236046e50b7cfceac70255b80d.png"},5963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nlp-26877215e9ab018d824d62d2661d41f5.png"},6904:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);