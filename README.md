# moment-tz-dep-test

References issue moment/moment-timezone#231 https://github.com/moment/moment-timezone/issues/231

```
moment-tz-dep-test/
|- package.json
|- node_modules/
   |- moment/ (^2.17.1)
   |- moment-timezone/ (^0.5.11)
   |- moment-tz-nested-dep/
      |- package.json (can use the same moment version but a different moment-timezone)
      |- moment-timezone/ (0.5.10)
```
