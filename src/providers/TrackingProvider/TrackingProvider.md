```js
<TrackingProvider
  track={(event, value) => {
    mixpanel.track(event, value);
  }}
>
  <div className="App">Tracking Provider example</div>
</TrackingProvider>
```
