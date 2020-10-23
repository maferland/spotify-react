<div align="center">
<h1>🤿 @maferland/spotify-react</h1>

<p>React component to display Spotify recently played tracks </p>
</div>

---

[![NPM](https://img.shields.io/npm/v/@maferland/spotify-react.svg)](https://www.npmjs.com/package/@maferland/spotify-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save-dev @maferland/spotify-react
// or
yarn add @maferland/spotify-react
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { RecentlyPlayedFeed } from '@maferland/spotify-reasct'

function App() {
  return (
    <RecentlyPlayedFeed
      userId='12166023407'
      feedStyle={{
        border: '1px solid red'
      }}
      itemStyle={{
        border: '1px dashed blue'
      }}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## Author

- [Marc-Antoine Ferland](https://maferland.com)

## LICENSE

[MIT](LICENSE)
