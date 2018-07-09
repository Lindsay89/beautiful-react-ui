A divider component is generally used to divide some parts of the page, for example: paragraphs
```jsx
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum pharetra ultrices. Etiam id mattis odio. Nam vulputate elit ac tellus luctus imperdiet.</p>
<Divider />
<p>Aenean mattis tempus libero, auctor rhoncus odio. Mauris eget tincidunt enim. Donec quis diam et metus tristique elementum at ac dui. Sed nec neque sed nulla fermentum ultrices.</p>
```

A divider can also be dashed, if needed:
```jsx
<p>Sed nec purus a lacus tincidunt tincidunt consectetur in augue. Lorem ipsum dolor sit ame.</p>
<Divider dashed />
<p>Morbi varius, elit sit amet mattis semper, mauris neque volutpat ipsum, a tempor sem arcu ut nisi. Aliquam at vestibulum sem, in aliquam sapien.</p>
```

Sometimes you need a light divider as well:
```jsx
<div style={{background: '#3d4852', padding: '20px 0'}}>
<Divider light />
</div>
```

You can actually nest some text at the center of it:
```jsx
<Divider>Some Text</Divider>
```

And of course it can be fancy, in case you're developing an app for the royal family or something...
```jsx
<Divider fancy>Hello, I'm the royal divider</Divider>
```