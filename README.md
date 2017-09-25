# bootstrap-styled-motion

bootstrap-styled-motion components made with styled-components for bootstrap-styled.

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/dev)

## Table of Contents

  - [Installation](#installation)
  - [Animation components](#animation-components)
  - [Changelog](#changelog)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## Installation

    npm install git+ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-motion.git --save

*Don't forget to also install peer dependencies*

## Animation components

All our animations components are documented on [bootstrap-styled](https://bootstrap-styled.kopaxgroup.com) documentation: [link](https://bootstrap-styled.kopaxgroup.com/motion/animations). 

```jsx harmony
export { Blur, Contrast, Brightness, Grayscale, HueRotate, Invert, Opacity, Sepia, Saturate, Dropshadow } from './filters/index';
export { Bounce, BounceDown, BounceUp, BounceLeft, BounceRight } from './bounce';
export { FadeIn, FadeInDown, FadeInUp, FadeInLeft, FadeInRight } from './fade/index';
export { Flip, FlipX, FlipY } from './flip';
export { LightIn, LightOut } from './lightspeed';
export { RotateIn, RotateLeft, RotateRight, RotateUpLeft, RotateUpRight } from './rotate/index';
export { SlideUp, SlideDown, SlideRight, SlideLeft, SlideRightLeft } from './slide/index';
export { Flash, RollOut, RollIn, Rubber, Swing, Zoom, Hinge, Pulse, ExpandUp, Entrance, Hatch } from './special';
```

## Changelog

  - View [Changelog](CHANGELOG.md)

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-motion.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch

# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

## Release

Merge `dev` into `master` will release a new version and prepare a new version in `dev`.

To release a new version, edit the [Changelog](CHANGELOG.md) and set the version in `package.json` and merge your change into `master`.

**⚠️ if you are releasing on a git repository instead of a npm repository, **DO NOT** forget to remove `build`, and `dist` from the `.gitignore` ⚠️**

    sed -i "/lib\|dist/d" .gitignore

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`. Made with [rollup-umd](https://module.kopaxgroup.com/dev-tools/rollup-umd/tags/0.1.5) 0.1.5
