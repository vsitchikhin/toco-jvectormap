VectorMap example:

```js
const mapContent = require('./maps/custom.js').default;
initialState = { count: 1 };

<>
  <button onClick={() => setState({ count: state.count + 1 })}>{state.count}</button>

  <div style={{ height: 500 }}>
    <CustomVectorMap
      mapContent={mapContent}
      selectedRegions={'step' + state.count}
      className={'map-' + state.count}
    />
  </div>
</>;
```
