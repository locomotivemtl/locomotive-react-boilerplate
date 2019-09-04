<p align="center">
    <a href="https://github.com/locomotivemtl/locomotive-react-boilerplate">
        <img src="https://user-images.githubusercontent.com/4596862/60541667-1cb8ef00-9ce0-11e9-8173-51468003a7e4.png" height="140">
    </a>
</p>
<h1 align="center">Locomotive React Boilerplate</h1>
<p align="center">Boilerplate for React projects by Locomotive.</p>

## Installation
```sh
npm install
```

## Usage
```sh
# watch
npm run start

# build
npm run build

# build svg
npm run build:svg

# build staging
npm run build:staging

# build production
npm run build:production
```

## Components
To create a component, you can duplicate the `Example` component.
- It's defined as a functional component and imports its own scss file.
- It accepts 3 CSS class related props: `option`, `utility` and `status`.
- These props will be formated and added to the component className with the `renderClasses` utility.
- Options will be namespaced with `-`, utilities with `u-` and statuses with `is-`.
- You must defined your class props as arrays.
- Any changes to these class props will trigger a component render.

## Dependencies
| Name       |
| ---------- |
| [Redux]    |
| [React Router] |
| [React Transition Group] |

[Redux]: https://github.com/reduxjs/redux
[React Router]: https://github.com/ReactTraining/react-router
[React Transition Group]: https://github.com/reactjs/react-transition-group

## Learn More
- The boilerplate is based on [Create React App](https://github.com/facebook/create-react-app).
- It uses styles from our [Locomotive Boilerplate](https://github.com/locomotivemtl/locomotive-boilerplate).

