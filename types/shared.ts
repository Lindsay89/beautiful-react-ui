/**
 * Exports all the shared colors supported by the library
 */
export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger';

/**
 * Exports the available size shared between some components
 */
export type Size = 'small' | 'default' | 'large';

/**
 * Defines a generic callback
 */
export type Callback<Event, Value> = (event: Event, value?: Value) => unknown;
