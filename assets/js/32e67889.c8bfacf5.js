"use strict";(self.webpackChunkonenine_ai_github_io=self.webpackChunkonenine_ai_github_io||[]).push([[7977],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,l(l({ref:e},u),{},{components:a})):n.createElement(h,l({ref:e},u))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8481:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],s={id:"data-analysis-intro",title:"Data Analysis Introduction",sidebar_label:"Introduction",slug:"/data-analysis/data-analysis-intro/",sidebar_position:1},o=void 0,c={unversionedId:"data-analysis/data-analysis-intro",id:"data-analysis/data-analysis-intro",title:"Data Analysis Introduction",description:"Before one takes the entire dataset as it is in consideration to bake it in the Machine Learning Model, Exploratory data analysis is one step which is unavoidable and time consuming.",source:"@site/docs/data-analysis/introduction.md",sourceDirName:"data-analysis",slug:"/data-analysis/data-analysis-intro/",permalink:"/docs/data-analysis/data-analysis-intro/",editUrl:"https://github.com/Onenine-AI/onenine-ai.github.io/tree/dev/docs/data-analysis/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"data-analysis-intro",title:"Data Analysis Introduction",sidebar_label:"Introduction",slug:"/data-analysis/data-analysis-intro/",sidebar_position:1},sidebar:"docs",previous:{title:"Start Your Data Science Journey",permalink:"/docs/data-literacy/start-data-science-journey"},next:{title:"One Click Exploratory Data Analysis",permalink:"/docs/data-analysis/one-click-data-analysis/"}},u=[{value:"Variable Identification",id:"variable-identification",children:[],level:3},{value:"Univariate Analysis",id:"univariate-analysis",children:[],level:3},{value:"Bi-Variate Analysis",id:"bi-variate-analysis",children:[],level:3},{value:"Missing Value Analysis",id:"missing-value-analysis",children:[],level:3},{value:"Outlier Removal",id:"outlier-removal",children:[],level:3}],d={toc:u};function p(t){var e=t.components,s=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before one takes the entire dataset as it is in consideration to bake it in the Machine Learning Model, Exploratory data analysis is one step which is unavoidable and time consuming."),(0,r.kt)("p",null,"It is  the process of performing preliminary investigations on the data using statistics and graphical representations to unwrap pattern and detect anomalies. It is the most important step in any data science process."),(0,r.kt)("p",null,"According to a survey conducted by CrowdFlower, Data Scientists spend an average of 60% of their time in Exploring, Cleaning and organizing the data in various grounds. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CrowdFlower Report",src:a(191).Z,title:"CrowdFlower Report",width:"1035",height:"846"})),(0,r.kt)("p",null,"EDA is a experimenational process which might include lots of steps as shown in the image below"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EDA Steps Expanded",src:a(9033).Z,title:"EDA Steps Expanded",width:"723",height:"391"})),(0,r.kt)("p",null,"But, a typical data analysis process involves various types of analysis like Univariate Analysis, Bi-variate Analysis, Multivariate Analysis, Missing Value analysis, Variable Interactions etc. These are the standard unavoidable analysis that has to be made on any dataset. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EDA Steps",src:a(7342).Z,title:"EDA Steps",width:"874",height:"90"})),(0,r.kt)("h3",{id:"variable-identification"},"Variable Identification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this step,  every variable is identifies by discovering its type. "),(0,r.kt)("li",{parentName:"ul"},"According to the needs, the datatype of any variable can be changed")),(0,r.kt)("h3",{id:"univariate-analysis"},"Univariate Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Univariate Analysis, thr individual characteristics of every feature/variable available in the dataset is studied. There are two types of features \u2013 Continuous and Categorical. "),(0,r.kt)("li",{parentName:"ul"},"The table below describes the various graphical techniques that can be applied to analyze them.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type Of Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Graphical Technique"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Continuous"),(0,r.kt)("td",{parentName:"tr",align:null},"Histograms, KDE, Box Plots, Q-Q Plots(specifically for outliers)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Categorical"),(0,r.kt)("td",{parentName:"tr",align:null},"Bar Plot, Pie Chart, Frequency Tables, Word Clouds(specifically for text data)")))),(0,r.kt)("h3",{id:"bi-variate-analysis"},"Bi-Variate Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Bi-Variate Analysis, relationship between any two variables which can be categorical-continuous, categorical-categorical, or continuous-continuous is studied. "),(0,r.kt)("li",{parentName:"ul"},"The table below explains the various graphical techniques that can be applied to different combinations of data types.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type Of Relationship"),(0,r.kt)("th",{parentName:"tr",align:null},"Graphical Technique"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Continuous-Continuous"),(0,r.kt)("td",{parentName:"tr",align:null},"Scatter Plots, Heat Maps, Joint Plots, Pair Plots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Categorical-Continuous"),(0,r.kt)("td",{parentName:"tr",align:null},"Factor Plot, Swarm Plot, Violin Plot, Strip Plot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Categorical-Categorical"),(0,r.kt)("td",{parentName:"tr",align:null},"Bar charts, Stacked Bar charts, Crosstabs, Percentage Bar Charts")))),(0,r.kt)("h3",{id:"missing-value-analysis"},"Missing Value Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Primary reason for this step is to find out if there is any specific reason why these values are missing and how to treat them. "),(0,r.kt)("li",{parentName:"ul"},"Leaving them untreated hey can interfere with the pattern running in the data which in turn can degrade the model\u2019s performance. "),(0,r.kt)("li",{parentName:"ul"},"Some of the ways in which missing values can be treated are include",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Filling them with mean ",(0,r.kt)("em",{parentName:"li"},"(In case of continuous variables)"),", "),(0,r.kt)("li",{parentName:"ul"},"Filling them with median ",(0,r.kt)("em",{parentName:"li"},"(In case of continuous variables)"),", "),(0,r.kt)("li",{parentName:"ul"},"Filling them with mode ",(0,r.kt)("em",{parentName:"li"},"(In case of categorical variables)")),(0,r.kt)("li",{parentName:"ul"},"Filling them with arbitrary values ",(0,r.kt)("em",{parentName:"li"},"(In case of both continuous and categorical variables)"))))),(0,r.kt)("h3",{id:"outlier-removal"},"Outlier Removal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An outlier is a data point that deviates significantly from the rest of the data points."),(0,r.kt)("li",{parentName:"ul"},"It is essential to understand the presence of outliers as some of the predictive models are sensitive to them and they have to be treated accordingly.")),(0,r.kt)("p",null,"The OneNineAI platform can perform all of this analysis and provide a detailed downloadable report in just one click!"))}p.isMDXComponent=!0},191:function(t,e,a){e.Z=a.p+"assets/images/crowd_flower-dfc092cbe333b9057d41b94bdc70ba08.jpg"},7342:function(t,e,a){e.Z=a.p+"assets/images/steps-f143a41f863441b27fbec39a157c1a3a.jpg"},9033:function(t,e,a){e.Z=a.p+"assets/images/steps2-93f90af1f6f2c423be4b45eae4b13185.jpg"}}]);