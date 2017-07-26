# 🎛 rfg (React Fab Grid)

A super simple react component for creating grids. Uses the [fab four technique](https://medium.freecodecamp.org/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848) to eliminate the need for any media queries.

## Install

```shell
$ yarn add rfg
```

## Usage

```jsx
import React from 'react'
import Col from 'rfg'

const App = () => (
  <div>
    <Col size={4}>I'm in a 1/3 column.</Col>
    <Col size={8}>I'm in a 2/3 column.</Col>
  </div>
)

export default App
```

## API

#### `size`

A number between 1 and 12. Declares the size of the box (1 being 1/12 width and 12 being the full width).

#### `breakpoint`

Any number. Used to declare the point in which to break the row into columns.

## License

MIT © [Henry Kaufman](http://github.com/hcjk)