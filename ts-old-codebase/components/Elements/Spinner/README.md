Spinner:

A Spinner component is used to show an animated glyph, mostly used to point that an activity has to complete.

```jsx
<Spinner />
```

spinner may have different types:

```jsx
<Spinner type="circle" />
<Spinner type="bars" />
<Spinner type="puff" />
<Spinner type="dots" />
```

and different colours:

```jsx
<Spinner type="circle" />
<Spinner type="circle" color="primary" />
<Spinner type="circle" color="secondary" />
<Spinner type="circle" color="info" />
<Spinner type="circle" color="warning" />
<Spinner type="circle" color="success" />
<Spinner type="circle" color="danger" />
```

is it possible to define the size as well by choosing from 'small', 'default', or 'large':

```jsx
<Spinner type="circle" color="primary" size="small" />
<Spinner type="circle" color="primary" size="default" />
<Spinner type="circle" color="primary" size="large" />
```

is it also possible to define a custom size in number:

```jsx
<Spinner color="primary" type="circle" size="40" />
<Spinner color="primary" type="circle" size="60" />
<Spinner color="primary" type="circle" size="80px" />
```

This component is inspired by [Sam Herbert's SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders)
