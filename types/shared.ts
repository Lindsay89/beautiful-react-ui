export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger';
export type Size = 'small' | 'default' | 'large';
export type Callback<Event, Value> = (event: Event, value?: Value) => unknown;
