"use strict";(self.webpackChunkonenine_ai_github_io=self.webpackChunkonenine_ai_github_io||[]).push([[3410],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return p}});var l=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,l,n=function(a,e){if(null==a)return{};var t,l,n={},r=Object.keys(a);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var o=l.createContext({}),u=function(a){var e=l.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},c=function(a){var e=u(a.components);return l.createElement(o.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,o=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),m=u(t),p=n,k=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return t?l.createElement(k,i(i({ref:e},c),{},{components:t})):l.createElement(k,i({ref:e},c))}));function p(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s.mdxType="string"==typeof a?a:n,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},624:function(a,e,t){t.r(e),t.d(e,{assets:function(){return E},contentTitle:function(){return j},default:function(){return _},frontMatter:function(){return D},metadata:function(){return P},toc:function(){return S}});var l=t(7462),n=t(3366),r=t(7294),i=t(3905),s=t(2389),o=t(6079),u=t(6010),c="tabItem_LplD";function d(a){var e,t,n,i=a.lazy,s=a.block,d=a.defaultValue,m=a.values,p=a.groupId,k=a.className,h=r.Children.map(a.children,(function(a){if((0,r.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.lx)(b,(function(a,e){return a.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(t=h.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(n=h[0])?void 0:n.props.value;if(null!==y&&!b.some((function(a){return a.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),g=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,r.useState)(y),T=w[0],x=w[1],C=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=g[p];null!=O&&O!==T&&b.some((function(a){return a.value===O}))&&x(O)}var D=function(a){var e=a.currentTarget,t=C.indexOf(e),l=b[t].value;l!==T&&(I(e),x(l),null!=p&&N(p,l))},j=function(a){var e,t=null;switch(a.key){case"ArrowRight":var l=C.indexOf(a.currentTarget)+1;t=C[l]||C[0];break;case"ArrowLeft":var n=C.indexOf(a.currentTarget)-1;t=C[n]||C[C.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},k)},b.map((function(a){var e=a.value,t=a.label,n=a.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(a){return C.push(a)},onKeyDown:j,onFocus:D,onClick:D},n,{className:(0,u.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===e})}),null!=t?t:e)}))),i?(0,r.cloneElement)(h.filter((function(a){return a.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(a,e){return(0,r.cloneElement)(a,{key:e,hidden:a.props.value!==T})}))))}function m(a){var e=(0,s.Z)();return r.createElement(d,(0,l.Z)({key:String(e)},a))}function p(a){var e=a.children,t=a.hidden,l=a.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:l},e)}var k=t.p+"assets/images/stats-0b8aa5a0e0741aae2a24fd7416c1ae2b.jpg",h=t.p+"assets/images/kde-85bfc74a7ff171747268588c417db1b4.jpg",b=t.p+"assets/images/qq-4082a833d854d5ac701a1821bba067ae.jpg",f=t.p+"assets/images/box-42a5be278ccf2b9ffaa2449be007a23b.jpg",y=t.p+"assets/images/stats_cat-69387bc32368b0e2831a20a776f2076b.jpg",v=t.p+"assets/images/pie-bff6cc2adeab8e0175f9ca5c7c05c1b7.jpg",g=t.p+"assets/images/word_cloud-e8f5270e0c0d1adacda5ca5d149d6c50.jpg",N=t.p+"assets/images/word_frequency-f09285f29ae9bbbfd6b214a76634df22.jpg",w=t.p+"assets/images/word_length-4fa7f0384cadc7ba3aca10e423cd9d26.jpg",T=t.p+"assets/images/bar-d75e5279de7c4ce356b4b8116a2bf2e6.jpg",x=t.p+"assets/images/spectrum-043379f0b8f44b101f9065befa75d4da.jpg",C=t.p+"assets/images/heat-e9d363fa50e8dcc3c3c4c3abc1d5b16f.jpg",I=t.p+"assets/images/dendrogram-bbd53bdc7b6cba7f5e48c2911a46919d.jpg",O=["components"],D={id:"one-click-data-analysis",title:"One Click Exploratory Data Analysis",sidebar_label:"One Click Exploratory Data Analysis",slug:"/data-analysis/one-click-data-analysis/",sidebar_position:2},j=void 0,P={unversionedId:"data-analysis/one-click-data-analysis",id:"data-analysis/one-click-data-analysis",title:"One Click Exploratory Data Analysis",description:"The Exploration Project feature of OneNineAI platform analyses the uploaded data in the following grounds.",source:"@site/docs/data-analysis/one-click-data-analysis.md",sourceDirName:"data-analysis",slug:"/data-analysis/one-click-data-analysis/",permalink:"/docs/data-analysis/one-click-data-analysis/",editUrl:"https://github.com/Onenine-AI/onenine-ai.github.io/tree/dev/docs/data-analysis/one-click-data-analysis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"one-click-data-analysis",title:"One Click Exploratory Data Analysis",sidebar_label:"One Click Exploratory Data Analysis",slug:"/data-analysis/one-click-data-analysis/",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/data-analysis/data-analysis-intro/"},next:{title:"Data Analysis Examples",permalink:"/docs/data-analysis/data-analysis-examples/"}},E={},S=[{value:"Data Overview",id:"data-overview",level:2},{value:"Variable Analysis",id:"variable-analysis",level:2},{value:"Numeric Variables",id:"numeric-variables",level:3},{value:"Categorical Variables",id:"categorical-variables",level:3},{value:"Interaction",id:"interaction",level:2},{value:"Correlations",id:"correlations",level:2},{value:"Missing Value Analysis",id:"missing-value-analysis",level:2}],q={toc:S};function _(a){var e=a.components,r=(0,n.Z)(a,O);return(0,i.kt)("wrapper",(0,l.Z)({},q,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Exploration Project feature of OneNineAI platform analyses the uploaded data in the following grounds."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#data-overview"},"Data Overview"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#dataset-statistics"},"Dataset Statistics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#dataset-insights"},"Dataset Insights")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#variable-analysis"},"Variable Analysis"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#numeric-variables"},"Numeric Variables"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#summary-statistics"},"Summary Statistics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#kde-plot"},"KDE Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#normal-q-q-plot"},"Normal Q-Q Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#box-plot"},"Box Plot")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#categorical-variables"},"Categorical Variables"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#stats"},"Stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#pie-chart"},"Pie Chart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#word-cloud"},"Word Cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#word-frequency"},"Word Frequency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#word-length"},"Word Length")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#interactions"},"Interactions")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#correlations"},"Correlations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#pearson-correlation"},"Pearson Correlation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#spearman-correlation"},"Spearman Correlation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#kendalltau-correlation"},"KendallTau Correlation")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/data-analysis/one-click-data-analysis#missing-value-analysis"},"Missing Value Analysis"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"data-overview"},"Data Overview"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"dataset-statistics"},"Dataset Statistics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Includes  high level statistics about the data such as  Dimension of the data, memory size, variable types etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"dataset-insights"},"Dataset Insights"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Includes auto-generated intuitive verbal insights for easy and quick understanding")))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Data Overview",src:t(4571).Z,title:"Data Overview",width:"1342",height:"618"})),(0,i.kt)("h2",{id:"variable-analysis"},"Variable Analysis"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"numeric-variables"},"Numeric Variables"),(0,i.kt)("p",null,"In case of numeric variables, the following insights can be obtained."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"summary-statistics"},"Summary Statistics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provides important statistical information about the variable. It includes quantile statistics such as Minimum, Maximum, Q1, Q3, 5th Percentile, 95th percentile, Median, Range and IQR and Descriptive statistics  such as Mean, Standard Deviation, Variance, Sum, Skewness, Kurtosis, Coefficient of Variation and the total sum"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"kde-plot"},"KDE Plot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A KDE plot is nothing but the Kernel Density Plot which visualizes the distribution of observations. "),(0,i.kt)("li",{parentName:"ul"},"It displays the probability density at different values in a continuous variable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"normal-q-q-plot"},"Normal Q-Q Plot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A Q-Q plot is a scatter plot created by plotting two sets of quantiles against one another. "),(0,i.kt)("li",{parentName:"ul"},"If both sets of quantiles came from the same distribution, we should see the points forming a line that's roughly straight"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"box-plot"},"Box Plot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Box plot represents the summary statistics of the data in a graphical manner.")))),(0,i.kt)(m,{defaultValue:"sum_stats",values:[{label:"Summary Statistics",value:"sum_stats"},{label:"KDE Plot",value:"kde"},{label:"Normal Q-Q Plot",value:"qq"},{label:"Box Plot",value:"box"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"sum_stats",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:k})),(0,i.kt)(p,{value:"kde",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:h})),(0,i.kt)(p,{value:"qq",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:b})),(0,i.kt)(p,{value:"box",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:f}))),(0,i.kt)("h3",{id:"categorical-variables"},"Categorical Variables"),(0,i.kt)("p",null,"In case of categorical variables, the following insights can be obtained"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"stats"},"Stats"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Includes Length stats, Sample Stats and Letter Stats"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"pie-chart"},"Pie Chart"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A frequency Pie chart representing the frequency of each category"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"word-cloud"},"Word Cloud"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A visual representation of words from the categorical variable where the font size of the word is proportional to the frequency"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"word-frequency"},"Word Frequency"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A bar plot representing the frequency of each category in descending order"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"word-length"},"Word Length"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A bar plot of word lengths against the frequency")))),(0,i.kt)(m,{defaultValue:"stats_cat",values:[{label:"Stats",value:"stats_cat"},{label:"Pie Chart",value:"pie"},{label:"Word Cloud",value:"word_cloud"},{label:"Word Frequency",value:"word_frequency"},{label:"Word Length",value:"word_length"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"stats_cat",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:y})),(0,i.kt)(p,{value:"pie",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:v})),(0,i.kt)(p,{value:"word_cloud",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:g})),(0,i.kt)(p,{value:"word_frequency",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:N})),(0,i.kt)(p,{value:"word_length",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:w}))),(0,i.kt)("h2",{id:"interaction"},"Interaction"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic Interactive scatter plots between numeric variables. A scatter plot basically uses dots to represent values for two different numeric variables. The position of each dot on the horizontal and vertical axis indicates values for an individual data point",(0,i.kt)("br",null))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Scatter Plots",src:t(2286).Z,title:"Scatter Plots",width:"1322",height:"742"})),(0,i.kt)("h2",{id:"correlations"},"Correlations"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Correlation denotes the extent of association between the variables. "),(0,i.kt)("li",{parentName:"ul"},"Correlation can be measured using Correlation coefficients whose value range between -1 to 1. "),(0,i.kt)("li",{parentName:"ul"},"When the correlation coefficient is -1, then it means that the variables are strongly inversely associated (When one increases, the other decreases) . "),(0,i.kt)("li",{parentName:"ul"},"A correlation coefficient of 1 means that the variables are strongly directly associated (When one increases, the other also increases). "),(0,i.kt)("li",{parentName:"ul"},"A correlation of 0 means that there is no correlation or association between the variables. There are a lot of ways in which we can calculate the correlation coefficient. "),(0,i.kt)("li",{parentName:"ul"},"In this report, Correlation analysis with three different types of formulas can be obtained."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"pearson-correlation"},"Pearson Correlation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is the most common form of correlation which measures the linear relationship. "),(0,i.kt)("li",{parentName:"ul"},"Suitable for variables that follow normal distribution."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"spearman-correlation"},"Spearman Correlation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is a non-parametric test that measures a monotonic relationship using ranked or ordinal data. "),(0,i.kt)("li",{parentName:"ul"},"Does not require continuous data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"kendalltau-correlation"},"KendallTau Correlation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Similar to Spearman, Kendall\u2019s is non-parametric meaning that it does not require the two variables to fall into a bell curve. "),(0,i.kt)("li",{parentName:"ul"},"Kendall\u2019s also does not require continuous data.")))),(0,i.kt)("h2",{id:"missing-value-analysis"},"Missing Value Analysis"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The number of missing values in each variable are represented using the various forms of visualizations such as Bar Chart, Spectrum Chart, Heat Map and Dendrogram")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"bar-chart"},"Bar Chart"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In general, A bar chart represents  data with rectangular bars where the heights or lengths proportional to the values that they represent."),(0,i.kt)("li",{parentName:"ul"},"Here, the count of of missing values are represented in terms of percentage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"spectrum"},"Spectrum"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Similar to Bar chart, Spectrum also displays the count of missing values in a two dimensional space against the row indices"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"heat-map"},"Heat Map"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generally, A heat map is a data visualization technique that shows magnitude of a missing values as color in two dimensions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"dendrogram"},"Dendrogram"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The dendrogram is a visual representation of the compound missing data. "),(0,i.kt)("li",{parentName:"ul"},"The individual compounds are arranged along the bottom of the dendrogram and referred to as leaf nodes."),(0,i.kt)("li",{parentName:"ul"},"Compound clusters are formed by joining individual compounds or existing compound clusters with the join point referred to as a node")))),(0,i.kt)(m,{defaultValue:"bar",values:[{label:"Bar Chart",value:"bar"},{label:"Spectrum Chart",value:"spectrum"},{label:"Heat Map",value:"heat"},{label:"Dendrogram",value:"dendrogram"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"bar",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:T})),(0,i.kt)(p,{value:"spectrum",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:x})),(0,i.kt)(p,{value:"heat",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:C})),(0,i.kt)(p,{value:"dendrogram",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("img",{src:I}))))}_.isMDXComponent=!0},4571:function(a,e,t){e.Z=t.p+"assets/images/overview-2ab198796d156a002be77f863bf32341.jpg"},2286:function(a,e,t){e.Z=t.p+"assets/images/scatter_plot-c49343a5c4f32367bba6b8d0ab0988d4.jpg"}}]);