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
</>
```

```js
const mapContent = require('jvectormap-content/fr_regions_2016-mill.js');

<div style={{ height: 500 }}>
  <CustomVectorMap
    map='world-mill'
    mapContent={mapContent}
  />
</div>
```
