<h1 align="center">THREE.Webpack</h1>
<img src="https://github.com/juniorxsound/THREE.Webpack/blob/master/docs/cover.jpg" />

<p align="center">
<img src="https://travis-ci.com/juniorxsound/THREE.Webpack.svg?token=ztzi6EexNpaHGeSp1q8W&branch=master" />
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  
<p align="center">⚒ My boilerplate three.js + glslify + webpack starter for quick prototyping. <a href="https://juniorxsound.github.io/THREE.Webpack/">Check it out live here</a>
</p>
<p align="center"><a href="#quick-start">Quick-start</a> | <a href="#develop">Develop</a> | <a href="#deploy">Deploy</a></p>
</p>

### Quick-start
To quickly get started, clone the repository
```sh
git clone https://github.com/juniorxsound/THREE.Webpack.git
```
Make sure you have yarn installed ([or install it](https://yarnpkg.com/lang/en/docs/install/#mac-stable)) and run
```sh
cd THREE.Webpack && yarn
```
Now you can start developing by running
```sh
yarn run dev
```
### Develop
You can use the following commands from the root of the project:  
`yarn run dev` - Start Webpack development server (supports HMR)   
`yarn run style` - Run prettier and format the code (config is in `.prettierrc`)   
`yarn run build` - Build static markdown and JS bundle into `dist` folder   
`yarn run deploy` - Use `gh-pages` to commit to the static folder to a Github pages branch (needs a `GITHUB_TOKEN` enviorment variable)

### Deploy
This repository uses `Travis CI` for deploying a static page to Github pages. All you need to do is connect the repository to your Travis account, create a Github access token and set the token as an environment variable in Travis under `GITHUB_TOKEN`.
