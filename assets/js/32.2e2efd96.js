(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{392:function(e,t,s){"use strict";s.r(t);var a=s(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Usage"}},[e._v("Usage")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Integration"}},[e._v("Integration")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),s("p",[e._v("Once you have decided "),s("strong",[e._v("what")]),e._v(" the project will consist of, what the limits of the system will be and what data it will be based on, it is time to think about "),s("em",[e._v("how it will be implemented and integrated")]),e._v(" into existing systems.")]),e._v(" "),s("p",[e._v("In fact, "),s("strong",[e._v("it is extremely rare for a Machine Learning system to stand alone")]),e._v(', much more likely it is designed to act together with other systems (not necessarily "intelligent", but also more classic as a management system or a mobile application).')]),e._v(" "),s("p",[e._v("It is vital to understand two things:")]),e._v(" "),s("ul",[s("li",[e._v("How the system will be used")]),e._v(" "),s("li",[e._v("How the system will be integrated")])]),e._v(" "),s("p",[e._v('Let\'s start with "how the system will be used".')]),e._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("The questions we have to ask ourselves are:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Which characteristics should be preferred?")])])]),e._v(" "),s("p",[e._v("As in any software project, or in general engineering projects, in Data Science projects tradeoffs are extremely common.")]),e._v(" "),s("p",[e._v("Depending on the type of requirement that our project has, we should ask ourselves what are its essential characteristics: should the system always remain online? or is it used once in a while? should the system be quick to calculate, or should it be very precise?")]),e._v(" "),s("p",[e._v("In other words, we need to make sure that the most important features of the system drive its design and time management on the project.")]),e._v(" "),s("p",[s("em",[e._v("For example")]),e._v(", an intelligent surveillance camera is important that it detects and recognizes each subject in its frame, so we will give more importance to its accuracy than to its speed of calculation.")]),e._v(" "),s("p",[s("em",[e._v("On the contrary")]),e._v(", for an autonomous trading system that has to make decisions in the order of milliseconds, to buy or sell goods, it is vital that the predictions of the Machine Learning model are very fast, perhaps at the expense of the accuracy of the forecast.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("How important is the use of the system by the user (vital, accessory, temporary, perpetual)?")])])]),e._v(" "),s("p",[e._v("This is a question that is often underestimated by those who develop a system: it is taken for granted that the things we do with our hands are always indispensable.")]),e._v(" "),s("p",[e._v("But this is not always the case, especially in a world where requirements change rapidly and "),s("strong",[e._v("prediction models deteriorate quickly")]),e._v("!")]),e._v(" "),s("p",[e._v("We should always ask ourselves: is the use of the system vital for the user? For example, if it is the system that decides whether to inject medicines into a patient, of course, it is. In this case, we must spend more energy to make the system robust and constantly monitored, in order to avoid disasters.")]),e._v(" "),s("p",[e._v("On the contrary, if my favorite application does not succeed in suggesting the best combination of food and drink, it is certainly a minor problem.")]),e._v(" "),s("p",[e._v("Another aspect to consider is: will the system be used for a predetermined period of time, or will it be used in a perpetual way? In the first case perhaps it would be better to focus on the development of a well-made application from the beginning, while in the second case you can choose a more incremental approach.\nIn practice, precisely because of the marked experimentation of Data Science, the incremental approach is often recommended.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("How much will the system be used?")])])]),e._v(" "),s("p",[e._v("What kind of use does the system have from the point of view of the frequency of use? Is it used only once? Or a few times a day? Or thousands of times a second?")]),e._v(" "),s("p",[e._v("Based on the answers we understand what performance our system must have: if it is used one-off, it can also be quite slow in computing, and maybe you can focus on making an extremely precise ML model.")]),e._v(" "),s("p",[e._v("On the contrary, if you need thousands of predictions per second (or millions), you have to take them into account during the design, and try to create light and fast ML models in data inference.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("How do I evaluate user feedback (written reports, numerical evaluations, usage statistics)?")])])]),e._v(" "),s("p",[e._v("During the serving and monitoring phase of the model, in the final part of the project, it is vital to monitor its performance and to ensure that it does not degrade (and more importantly, to ensure that the model is used).")]),e._v(" "),s("p",[e._v("There are several ways to do this:")]),e._v(" "),s("ul",[s("li",[e._v("you can draw up usage statistics")]),e._v(" "),s("li",[e._v("you can make numerical assessments of the system's performance")]),e._v(" "),s("li",[e._v("you can ask for written feedback from users so that you can improve your interaction with the application")])]),e._v(" "),s("p",[e._v("In any case, these feedbacks are very useful to understand the direction to take to improve the ML models that make predictions and to ensure that they continue to work on a regular basis.")]),e._v(" "),s("p",[e._v("These kinds of questions help us to define how the system is used in a real-world scenario, which is fundamental in the design choices that will be made during all phases of research and development.")]),e._v(" "),s("h3",{attrs:{id:"integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[e._v("#")]),e._v(" Integration")]),e._v(" "),s("p",[e._v("Now let's ask ourselves \""),s("strong",[e._v("how the system will be integrated?")]),e._v('".')]),e._v(" "),s("p",[e._v("These questions are not explored in-depth, because the role of the Data Scientist is not to integrate systems, or to make them secure, or to monitor the proper functioning of the hardware side.")]),e._v(" "),s("p",[e._v("However, it is useful to have at least one awareness of the challenges that these issues pose during the production of a Machine Learning system.")]),e._v(" "),s("p",[e._v("The questions to be asked here are the classic ones of systems integration, plus some others:")]),e._v(" "),s("ul",[s("li",[e._v("Which systems will integrate with the existing system?")]),e._v(" "),s("li",[e._v("How is the system served (desktop application, mobile application, API Rest, remote calls)?")]),e._v(" "),s("li",[e._v("If offered as a service (as is common practice in microservices architectures), where is it hosted (local machine, Cloud provider)?")]),e._v(" "),s("li",[e._v("If offered as a service, how do I control the usage of the system  (access tokens, usage limits, permissions at various levels)?")]),e._v(" "),s("li",[e._v("How should the system scale (load balancing, data partitioning, distribution of ML models, parameters)?")]),e._v(" "),s("li",[e._v("Are there any particular constraints (platform migration, budget constraints, security, privacy considerations, and regulation)?")]),e._v(" "),s("li",[e._v("How much automation can be introduced and at what stages (research, development, deployment)?")])]),e._v(" "),s("p",[e._v("These are the kind of questions to be answered in order to have a complete picture of the future use and integration of the system.\nIn this guide, we have listed the key questions to ask each time you start a new Data Science project.")]),e._v(" "),s("h3",{attrs:{id:"conclusions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),s("p",[e._v("In general, "),s("strong",[e._v("it is extremely useful to produce a document summarising all the answers to the questions")]),e._v(", so as to provide a clear view of the project as a whole, what are the final objectives, and the most important characteristics for the system.")]),e._v(" "),s("p",[e._v("This list is not exhaustive, and as you get a question in your head you feel free to pull a request to this file.")]),e._v(" "),s("p",[e._v("A Virgilio member will take over your request and enrich this guide with your contribution.")]),e._v(" "),s("p",[e._v("In the next guide, we will see other key questions (more oriented to understand how we want to build the machine learning model that makes predictions) to be asked during the framing phase of the problem, which will help us to develop the project successfully.")])])}),[],!1,null,null,null);t.default=o.exports}}]);