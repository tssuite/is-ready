<!--
@license
Copyright (c) 2025 tssuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

## isReady: Deferred Promise Utility

`isReady` provides a simple way to create a promise that can be resolved at a
later time, enabling deferred execution and synchronization in your TypeScript
projects. This is useful for scenarios where you need to hand out a promise to
consumers before the value or event is available, and resolve it once the
resource is ready.

### Key Features

- Create a promise and resolve it later
- Useful for event-driven and async workflows
- TypeScript support
- Lightweight and dependency-free

### Example Usage

```ts
import { isReady } from 'is-ready';

const isReady = IsReady.example;
let didResolve = false;
isReady.promise.then(() => {
  didResolve = true;
});
```

This pattern is ideal for cases where you need to coordinate asynchronous operations, such as waiting for initialization, external events, or resources to become available.

See the API documentation for more advanced usage and options.
