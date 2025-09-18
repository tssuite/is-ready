// @license
// Copyright (c) 2025 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, it } from 'vitest';

import { IsReady } from '../src/is-ready';

describe('IsReady', () => {
  describe('instance', () => {
    it('returns an instance of the IsReady', () => {
      const isReady = IsReady.instance;
      expect(isReady).toBeInstanceOf(IsReady);
    });
  });

  describe('example', () => {
    it('returns an example object', () => {
      const example = IsReady.example;
      expect(example).toBeInstanceOf(IsReady);
    });
  });

  describe('state', () => {
    it('returns false until resolve() is called', () => {
      const isReady = IsReady.instance;
      expect(isReady.state).toBe(false);

      isReady.resolve();
      expect(isReady.state).toBe(true);
    });
  });

  describe('isReady', () => {
    it('returns a promise that resolves when resolve() is called', async () => {
      let isReady0 = false;
      let isReady1 = false;

      const isReady = IsReady.instance;
      expect(isReady.state).toBe(false);
      isReady.promise.then(() => {
        isReady0 = true;
      });

      isReady.promise.then(() => {
        isReady1 = true;
      });

      expect(isReady0).toBe(false);
      expect(isReady1).toBe(false);

      isReady.resolve();

      // Wait for the promise to resolve
      await isReady.promise;

      expect(isReady0).toBe(true);
      expect(isReady1).toBe(true);
    });
  });

  describe('reset', () => {
    it('resets the state to false', () => {
      const isReady = IsReady.instance;
      isReady.resolve();
      expect(isReady.state).toBe(true);

      isReady.reset();
      expect(isReady.state).toBe(false);
    });
  });
});
