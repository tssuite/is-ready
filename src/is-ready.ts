// @license
// Copyright (c) 2025 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

// .............................................................................
export class IsReady {
  constructor() {}

  static get instance(): IsReady {
    return new IsReady();
  }

  static get example(): IsReady {
    return new IsReady();
  }

  get state(): boolean {
    return this._state;
  }

  resolve(): void {
    this._state = true;
    this._callbacks.forEach((callback) => {
      callback();
    });
    this._callbacks = [];
  }

  reset(): void {
    this._state = false;
  }

  get promise(): Promise<void> {
    return this._isReady();
  }

  // ######################
  // Private
  // ######################

  private _state: boolean = false;

  private _isReady(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this._state) {
        resolve();
      } else {
        this._callbacks.push(() => {
          resolve();
        });
      }
    });
  }

  private _callbacks: Array<() => void> = [];
}
