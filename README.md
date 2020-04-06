# Jazzicon in pure React

> Reimplementation of [Dan Finlay's jazzicon](https://github.com/danfinlay/jazzicon) in pure react.

It avoids calling `document` or `window`, thus suitable for server-side-generated pages, like in [Next.js](https://nextjs.org).

## Installation

```
yarn add @ukstv/jazzicon-react
```

## Usage

```typescript jsx
import { Jazzicon } from '@ukstv/jazzicon-react';

export default function() {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Jazzicon address={'0xBAc675C310721717Cd4A37F6cbeA1F081b1C2a07'} />
    </div>
  );
}
```

Remember to wrap `Jazzicon` component into something with desired width and height, as the component fills 100% of the enclosing component.

Alternatively, you could modify appearance via [styled-components](https://styled-components.com) or [emotion](https://emotion.sh):

```typescript jsx
import { Jazzicon, BASE_STYLES } from '@ukstv/jazzicon-react';
import styled from '@emotion/styled';
const ModifiedJazzicon = styled(Jazzicon)({
  ...BASE_STYLES,
  width: 100,
  height: 100,
});
export default function Icon() {
  return (
    <ModifiedJazzicon address={'0xBAc675C310721717Cd4A37F6cbeA1F081b1C2a07'} />
  );
}
```
