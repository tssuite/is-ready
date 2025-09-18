// @license
// Copyright (c) 2025 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { IsReady } from './is-ready.ts';

export const example = async () => {
  // Print methods
  const l = console.log;
  const h1 = (text: string) => l(`${text}`);
  const h2 = (text: string) => l(`  ${text.split('\n')}`);
  const p = (text: string) => l(`    ${text}`);

  // Example
  h1('IsReady.instance');
  h2('Returns an instance of the IsReady.');
  const isReady = IsReady.example;

  h2('The initial state is false.');
  p(`isReady.state: ${isReady.state}`);

  h2('The isReady promise is pending.');
  let didResolve = false;
  isReady.promise.then(() => {
    didResolve = true;
  });
  p(`didResolve: ${didResolve}`);

  h2('Call resolve()');
  isReady.resolve();
  await isReady.promise;

  h2('The state is now true and the promise has resolved.');
  p(`isReady.state: ${isReady.state}`);
  p(`didResolve: ${didResolve}`);
};

/*
// Run via "npx vite-node src/example.ts"
example();
*/
