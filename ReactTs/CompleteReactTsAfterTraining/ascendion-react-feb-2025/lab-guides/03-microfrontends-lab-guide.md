# Microfrontends in React
- __Module Federation__ is a feature built into Webpack 5 onwards that lets share modules, function etc. This is used to create apps (we deal with react apps here, but can be any JS apps) that can share code and features. This is used to built MFE apps.
- We use `create-mfe-app` to create MFE apps.
- Create a `home` app
```
npx create-mf-app@1.0.10
```
- Choices:
    - home
    - Application
    - 3000
    - react-18
    - javascript
    - Tailwind
```
- Create a `detailspage` app
npx create-mf-app@1.0.10
```
- Choices:
    - detailspage
    - Application
    - 3001
    - react-18
    - javascript
    - Tailwind
- Install dependencies and start the apps
- In one terminal
```
cd home
npm i
npm start
```
- In another terminal
```
cd detailspage
npm i
npm start
```
- In `home/src/Header.jsx`
```jsx
// import React from "react";

const Header = () => {
    return (
        <header className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <nav>
                Workshops App
            </nav>
        </header>
    )
};

export default Header;
```
- In `home/src/Footer.jsx`
```jsx
// import React from "react";

const Footer = () => {
    return (
        <footer className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <nav>
                &copy; ABC Consulting
            </nav>
        </footer>
    );
};

export default Footer;
```
- In `home/src/App.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "./Header";
import Footer from "./Header";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Welcome to Workshops App
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
```
- Visit `http:localhost:3000`
- Now we expose the Header and Footer to the detailspage page. Do these changes in `webpack.config.js`
```js
exposes: {
    "./Header": "./src/Header.jsx",
    "./Footer": "./src/Footer.jsx",
},
```
- Note also the `shared` key in the file. The configuration ensures all dependencies are shared between the microfrontend apps if possible (that is their versions are same) - but (multiple) different versions may be loaded. FOr React we MUST ensure only one version loads, else React apps break (only 1 instance of react and ReactDOM must be present).
- Restart home app (so the new Webpack configuration is read)
- Check `http:localhost:3000/remoteEntry.js`
- Copy this URL and paste in `detailspage/webpack.config.js` so that the exposed components from home (name of the home app is `home`, hence `home@http://localhost:3000/remoteEntry.js`) can be accessed in `detailspage`
```js
remotes: {
    home: "home@http://localhost:3000/remoteEntry.js"
},
```
- Restart `detailspage` app
- Copy the `home/src/App.jsx` component UI into detailspage app component, and modify as needed to get this in `detailspage/src/App.jsx`
``jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from 'home/Header';
import Footer from 'home/Footer';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Workshop Details Page
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
```
- __Optional Step__: If you want to support async loading of components (say for `Header`), then make this change in `detailspage/src/App.jsx`
```jsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Header = React.lazy(() => import('home/Header'));
const Footer = React.lazy(() => import('home/Footer'));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading header...</div>}>
      <Header />
    </Suspense>
    <div className="my-10">
      Workshop Details Page
    </div>
    <Suspense fallback={<div>Loading footer...</div>}>
      <Footer />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
```
- Refresh `http://localhost:3001` to observe the fallback text till the time header and footer load
- __Note__: As a good practice you can wrap external components like `Header`, `Footer` in `ErrorBoundary`, so breaking changes in those components from the host app (`home`) does not break the consumer (here, `detailspage`).
- Create an API server 
```
npx create-mf-app@1.0.10
```
- Choices:
    - server
    - API Server
    - 8080
    - nestjs-auth
- Install dependencies and start the app. But before that remove this line from `server/package.json`
```json
"@": "nestjs/passport",
```
- And modify `passport` version
```json
"passport": "^0.4.0",
```
```
cd server
npm i
npm start
```
- Copy workshop images to `server/public`. You can now access them on `http://localhost:8080/react.webp` etc.
- Change the `modules/unauthorized` controller to `modules/workshops` and wherever within as necessary
- Now check `http://localhost:8080/workshops`. The API returns `true`.
- Create `server/src/workshops.ts` and copy over the supplied workshops.ts file contents.
```ts
interface ILocation {
  address: string;
  city: string;
  state: string;
}

interface IModes {
  inPerson: boolean;
  online: boolean;
}

interface IWorkshop {
  name: string;
  category: string;
  id: number;
  description: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  time: string;
  location: ILocation;
  modes: IModes;
  imageUrl: string;
  image?: string;
}

const workshops: IWorkshop[] = [
  {
    name: 'Angular JS Bootcamp',
    category: 'frontend',
    id: 1,
    description:
      '<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for "model-view-whatever" and may also encompass model–view–presenter and model–view–adapter.)</p>',
    startDate: '2019-01-01T04:00:00.000Z',
    endDate: '2019-01-03T08:00:00.000Z',
    time: '9:30 am - 1:30 pm',
    location: {
      address: 'Tata Elxsi, Prestige Shantiniketan',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: false,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png',
    image: 'http://localhost:8080/angular.webp',
  },
  {
    name: 'React JS Masterclass',
    category: 'frontend',
    id: 2,
    description:
      '<p><strong>React</strong> (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p><p>React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>',
    startDate: '2019-01-14T04:30:00.000Z',
    endDate: '2019-01-16T12:30:00.000Z',
    time: '10:00 am - 6:00 pm',
    location: {
      address: 'Tata Elxsi, IT Park',
      city: 'Trivandrum',
      state: 'Kerala',
    },
    modes: {
      inPerson: true,
      online: true,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
    image: 'http://localhost:8080/react.webp',
  },
  {
    name: 'Crash course in MongoDB',
    category: 'database',
    id: 3,
    description:
      '<p><strong>MongoDB</strong> is a cross-platform document-oriented database program. It is issued under the Server Side Public License (SSPL) version 1, which was submitted for certification to the Open Source Initiative but later withdrawn in lieu of SSPL version 2. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.</p><p>MongoDB supports field, range query, and regular expression searches. Queries can return specific fields of documents and also include user-defined JavaScript functions. Queries can also be configured to return a random sample of results of a given size.</p>',
    startDate: '2019-01-20T07:00:00.000Z',
    endDate: '2019-01-22T11:00:00.000Z',
    time: '12:30 pm - 4:30 pm',
    location: {
      address: 'HCL, Electronic City Phase 1',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: false,
      online: true,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png',
    image: 'http://localhost:8080/mongodb.webp',
  },
  {
    name: 'Mastering Node JS and Express',
    category: 'backend',
    description:
      "<p><strong>Node.js</strong> is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting - running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.</p><p>The Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.</p>",
    startDate: '2019-10-20T07:00:00.000Z',
    endDate: '2019-20-22T07:00:00.000Z',
    time: '9:45 am - 5:45 pm',
    location: {
      address: 'Harman Connected Services\nITPL, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: false,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png',
    image: 'http://localhost:8080/node.webp',
    id: 4,
  },
  {
    name: 'TypeScript',
    category: 'language',
    description: 'TypeScript language fundamentals',
    startDate: '2019-06-24',
    endDate: '2019-06-24',
    time: '9:00 am - 5:00 pm',
    location: {
      address: 'Zenmonics',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: false,
    },
    imageUrl:
      'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    image: 'http://localhost:8080/typescript.webp',
    id: 6,
  },
  {
    name: 'Angular',
    category: 'frontend',
    id: 7,
    description:
      "<p>Google's <strong>Angular</strong> framework, is a much sought-after skill in the industry today. It is a single-page application (SPA) framework that includes most of the features required to build SPA applications. The Angular training gets you prepared for building enterprise-grade applications using the latest version of Angular.</p>",
    startDate: '2019-11-01T04:00:00.000Z',
    endDate: '2019-11-03T08:00:00.000Z',
    time: '9:30 am - 1:30 pm',
    location: {
      address: 'Tata Elxsi, Prestige Shantiniketan',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: true,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
    image: 'http://localhost:8080/angular.webp',
  },
  {
    name: 'Migrating from Angular JS to Angular',
    category: 'frontend',
    id: 8,
    description:
      "<p>Google's <strong>Angular</strong> framework, is a much sought-after skill in the industry today. <strong>Angular JS</strong> is the first version of this framework. Angular (the name for the framework since version 2) is a ground-up rewrite of Angular JS.</p><p>Migration from Angular JS to Angular is not a straightforward task. This training prepares you for migration of existing Angular JS to the latest version of Angular.</p>",
    startDate: '2019-12-01T04:00:00.000Z',
    endDate: '2019-12-03T08:00:00.000Z',
    time: '9:30 am - 1:30 pm',
    location: {
      address: 'Tata Elxsi, Prestige Shantiniketan',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: true,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
    image: 'http://localhost:8080/angular.webp',
  },
  {
    name: 'Apache Cordova',
    category: 'mobile',
    id: 10,
    description:
      '<p>Developing a mobile app requires extensive knowledge of native programming techniques for multiple platforms. <strong>Apache Cordova</strong> lets you use your existing skills in web development (HTML, CSS, and JavaScript) to build powerful mobile apps. Your apps also get the power of integration with native device features like the camera and file system.</p><p>In this bootcamp, you will learn to build apps from the Cordova CLI, how to make use of device features like the camera and accelerometer, and how to submit your apps to Google Play Store / Apple App Store.</p>',
    startDate: '2019-12-20T04:00:00.000Z',
    endDate: '2019-12-23T08:00:00.000Z',
    time: '9:00 am - 5:00 pm',
    location: {
      address: 'Nissan Digital, IT Park',
      city: 'Trivandrum',
      state: 'Kerala',
    },
    modes: {
      inPerson: true,
      online: true,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Apache_Cordova_Logo.svg/494px-Apache_Cordova_Logo.svg.png',
  },
  {
    name: 'Practical Git',
    category: 'devops',
    id: 11,
    description:
      '<p><strong>Git</strong> is a distributed Version Control System (VCS) created by Linus Torvalds. It is by far the most popular VCS in use today.</p>',
    startDate: '2019-12-28T04:00:00.000Z',
    endDate: '2019-12-28T08:00:00.000Z',
    time: '9:00 am - 5:00 pm',
    location: {
      address: 'SAP Labs, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: false,
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png',
  },
  {
    name: 'JavaScript Fundamentals',
    category: 'language',
    id: 12,
    description:
      '<p><strong>JavaScript (JS)</strong> is the language for scripting web pages – to enable user interactions on a web page, communicate with the backend etc.</p><p>The latest versions of JavaScript like ES2015 (ES6) have introduced a plethora of great new features that have found adoption in modern frontend and backend frameworks. A good understanding of JS, especially ES2015 features, lays a strong foundation to get started with frameworks like React and Angular, as also Node.js and Express.</p>',
    startDate: '2020-01-08T04:00:00.000Z',
    endDate: '2020-01-10T08:00:00.000Z',
    time: '9:00 am - 5:00 pm',
    location: {
      address: 'SAP Labs, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
    },
    modes: {
      inPerson: true,
      online: true,
    },
    imageUrl:
      'https://camo.githubusercontent.com/055e8995558e293e52e92d7c93b9ec49a9ea6c78/68747470733a2f2f63646e2e7261776769742e636f6d2f7a656b652f6a6176617363726970742d79656c6c6f772f6d61737465722f6c6f676f2e737667',
  },
];

export type { ILocation, IModes, IWorkshop };

export default workshops;
```
- Update the workshops controller
```ts
import { Controller, Get, Param } from '@nestjs/common';

import workshops, { IWorkshop } from '../../workshops';

@Controller('workshops')
export class WorkshopsController {
  constructor() {}

  @Get()
  async index(): Promise<IWorkshop[]> {
    return workshops;
  }

  @Get(':id')
  async show(@Param('id)') id: string): Promise<IWorkshop> {
    return workshops.find( workshop => workshop.id === +id );
  }
}
```
- Install axios in `home`
```
npm i axios
```
In `home/services/workshops.js`
```js
import axios from "axios";

const getWorkshops = async (page = 1) => {
    const params = {
        _page: page,
    };

    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops`,
        {
            params,
        }
    );

    return response.data;
};

const getWorkshopById = async (id) => {
    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops/${id}`
    );

    return response.data;
};

export { getWorkshops, getWorkshopById };
```
- In `home/src/WorkshopsList.js`
```js
import { useState, useEffect } from 'react';

import { getWorkshops } from './services/workshops';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(
        () => {
            getWorkshops().then(setWorkshops);
        },
        []
    )

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                workshops.map(w => (
                    <div key={w.id}>
                        <img
                            src={w.image || w.imageUrl}
                            alt={w.name}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default WorkshopsList;
```
- In `home/src/App.js`
```js
<div className="text-3xl mx-auto max-w-6xl">
  <Header />
  <div className="my-10">
    <WorkshopsList />
  </div>
  <Footer />
</div>
```
- We can share modules, functions etc. through Module Federation. In `home/webpack.config.js`
```js
exposes: {
  "./Header": "./src/Header.jsx",
  "./Footer": "./src/Footer.jsx",
  "./workshops": "./src/services/workshops.js"
}
```
- Restart home app
- Create `detailspage/src/WorkshopDetails.jsx`
```jsx
import { useState, useEffect } from 'react';
import { getWorkshopById } from "home/workshops";

const WorkshopDetails = () => {
    const id = 1;

    const [ workshop, setWorkshop ] = useState(null);

    useEffect(
      () => {
        if( id ) {
          getWorkshopById(id).then(
            workshop => {
              setWorkshop(workshop);
            }
          );
        } else {
          setWorkshop(null)
        }
      },
      [id]
    );

    if(!workshop) {
        return null;
    }

    return (
        <div>
          <h1>{workshop.name}</h1>
          <hr />
          <img
            src={workshop.image || workshop.imageUrl}
            alt={workshop.name}
          />
          <div dangerouslySetInnerHTML={{ __html: workshop.description}}></div>
        </div>
    );
}

export default WorkshopDetails;
```
- In `detailspage/src/App.jsx`
```jsx
import WorkshopDetails from "./WorkshopDetails";
```
```jsx
<div className="my-10">
  <WorkshopDetails />
</div>
```
- Install the following in `detailspage`
```
npm i react-router-dom
```
- Don't forget to start the `detailspage` app if you stopped it
- Wrap the UI in `BrowserRouter`. Do this in `detailspage/src/App.jsx`
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
```
```jsx
<BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <div className="my-10">
        <Routes>
          <Route path="/workshops/:id" element={<WorkshopDetails />} />
        </Routes>
      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  </BrowserRouter>
```
- Extract `id` from the params and use it in `detailspage/src/WorkshopDetails.jsx`
```jsx
import { useParams } from 'react-router-dom';
```
```jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWorkshopById } from 'home/workshops';

const WorkshopDetails = () => {
    const { id } = useParams();

    const [ workshop, setWorkshop ] = useState(null);

    useEffect(
      () => {
        if( id ) {
          getWorkshopById(id).then(
            workshop => {
              setWorkshop(workshop);
            }
          );
        } else {
          setWorkshop(null)
        }
      },
      [id]
    );

    if(!workshop) {
        return null;
    }

    return (
        <div>
          <h1>{workshop.name}</h1>
          <hr />
          <img
            src={workshop.image || workshop.imageUrl}
            alt={workshop.name}
          />
          <div dangerouslySetInnerHTML={{__html : workshop.description}}></div>
        </div>
    );
};

export default WorkshopDetails;
```
- Now nothing appears on `http:localhost:3001/`. Instead go to `http:localhost:3001/workshops/1` etc.
- Expose the details page through `detailspage/webpack.config.js`
```js
remotes: {
  home: "home@http://localhost:3000/remoteEntry.js",
  detailspage: "detailspage@http://localhost:3001/remoteEntry.js",
},
exposes: {
  "./WorkshopDetails": "./src/WorkshopDetails.jsx",
},
```
- You can also make the following change in `home/webpack.config.js`
```js
remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    detailspage: "detailspage@http://localhost:3001/remoteEntry.js",
},
```
- Now we host `WorkshopDetails` page it in the home app. First install `react-router-dom` in the home app
```
npm i react-router-dom
```
- Now make the following changes in `home/src/App.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./index.scss";

import Header from './Header';
import Footer from './Footer';
import WorkshopsList from "./WorkshopsList";
import WorkshopsDetails from "detailspage/WorkshopDetails";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
        <Route path="" element={
          <section>
            <h1>Home App (MFE App Shell)</h1>
            <hr className="my-4" />
            <div>
              <Link to="/workshops" style={{ textDecoration: 'underline', color: 'blue' }}>List of Workshops</Link>
            </div>
          </section>
        } />
          <Route path="/workshops" element={<WorkshopsList />} />
          <Route path="/workshops/:id" element={<WorkshopsDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
```
- __NOTE__: Since the `home` app is used to host all pages of the different MFEs, it is referred to as the __App Shell__ or Shell MFE. We say it is the main __host app__ that hosts the pages from various __remotes__
- Add a `profile` app
```
npx create-mf-app@1.0.10
```
- Choices:
    - profile
    - Application
    - 3002
    - react-18
    - JS
    - Tailwind
```
- In a new terminal
- Install dependencies and start the app
```
cd profile
npm i
npm start
```
- In __all of the MFEs__, install Zustand
```
npm i zustand
```
- Add a `profile/src/stores/profileStore.js` in store app
```js
import { create } from 'zustand';

export const useProfileStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
```
- Create a `profile/src/Profile.jsx`
```jsx
import { useProfileStore } from "./stores/profileStore";

const Profile = () => {
  const { user, setUser } = useProfileStore((state) => state);

  return <div>
    Welcome, {user?.name}!
    <input type="text" style={{ border: '1px solid black' }} value={user?.name} onChange={(event) => setUser({ name: event.target.value })} />
    <button onClick={() => setUser({ name: "John Doe" })} style={{ backgroundColor: '#ddd', padding: '8px', margin: '16px' }}>
        Set User to John Doe
      </button>
  </div>;
};

export default Profile;
```
- Expose `profileStore` and `Profile` from `store/webpack.config.js`
```js
exposes: {
  "./profileStore": "./src/stores/profileStore.js",
  "./Profile": "./src/Profile.jsx"
},
```
- In all the apps, add the store remote
```js
remotes: {
  home: "home@http://localhost:3000/remoteEntry.js",
  detailspage: "detailspage@http://localhost:3001/remoteEntry.js",
  profile: "profile@http://localhost:3002/remoteEntry.js"
},
```
- In the home app, host the Profile page as well. In `home/src/App.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./index.scss";

import Header from './Header';
import Footer from './Footer';
import WorkshopsList from "./WorkshopsList";
import WorkshopsDetails from "detailspage/WorkshopDetails";
import Profile from "profile/Profile";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
        <Route path="" element={
          <section>
            <h1>Home App (MFE App Shell)</h1>
            <hr className="my-4" />
            <div>
              <Link to="/workshops" style={{ textDecoration: 'underline', color: 'blue' }}>List of Workshops</Link>
            </div>
            <div>
              <Link to="/profile" style={{ textDecoration: 'underline', color: 'blue' }}>Profile</Link>
            </div>
          </section>
        } />
          <Route path="/workshops" element={<WorkshopsList />} />
          <Route path="/workshops/:id" element={<WorkshopsDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
```