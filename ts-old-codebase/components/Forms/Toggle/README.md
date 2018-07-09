```
const StatefulToggle = props => {
  const [value, setValue] = React.useState(0);

  return (<Toggle value={value} onChange={(event, value) => setValue(value)} {...props} />);
};


<StatefulToggle color="primary" />
```
