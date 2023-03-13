/// <reference types='codeceptjs' />
/* eslint-disable */
type steps_file = typeof import('../pages/steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
