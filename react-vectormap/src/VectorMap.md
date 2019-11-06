VectorMap example:

```js
initialState = { count: 0 };

<>
  <button onClick={() => setState({ count: state.count + 1 })}>{state.count}</button>

  <div style={{ width: '100%', height: 500, background: '#3b96ce' }}>
    <VectorMap map="custom" containerClassname={'map-' + state.count} />
  </div>
</>;
```
