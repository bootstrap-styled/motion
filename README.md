# bootstrap-styled-motion

bootstrap-styled-motion components made with styled-components for bootstrap-styled.

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/commits/dev)

## Table of Contents

  - [Prerequisite](#prerequisite)
  - [Installation](#installation)
  - [Animation components](#animation-components)
  - [Changelog](#changelog)
  - [Quick start](#quick-start)
  - [License](#license)

---

## Prerequisite 

```bash
$ npm install --save react react-dom styled-components
```

## Installation

```bash
$ npm install --save bootstrap-styled-motion
```

## Animation components

All our animations components are documented on [bootstrap-styled](https://bootstrap-styled.yeutech.com) documentation. 

```jsx harmony
import { 
  Blur, 
  Contrast, 
  Brightness, 
  Grayscale, 
  HueRotate, 
  Invert, 
  Opacity, 
  Sepia, 
  Saturate, 
  Dropshadow,
  Bounce, 
  BounceDown, 
  BounceUp, 
  BounceLeft, 
  BounceRight,
  FadeIn, 
  FadeInDown, 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight,
  Flip, 
  FlipX, 
  FlipY,
  LightIn, 
  LightOut,
  RotateIn, 
  RotateLeft, 
  RotateRight, 
  RotateUpLeft, 
  RotateUpRight,
  SlideUp, 
  SlideDown, 
  SlideRight, 
  SlideLeft, 
  SlideRightLeft,
  Flash, 
  RollOut, 
  RollIn, 
  Rubber, 
  Swing, 
  Zoom, 
  Hinge, 
  Pulse, 
  ExpandUp, 
  Entrance, 
  Hatch,
} from 'bootstrap-styled-motion';
```

## Changelog

  - View [Changelog](CHANGELOG.md)

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

`dev` is the development branch. It should be used by developers for applying their merge requests.

If you wish to implement new features you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 
    
## License

Licensed under the MIT License, Copyright © 2017-present Yeutech Company Limited.

See [LICENSE](LICENSE.md) for more information.
