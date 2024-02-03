# querystring
A query string build module for Jamkit


## Examples

```js
const qs = require("querystring");
const url = "https://yourapi.com/api/v1/contents?" + qs.stringify({
    "location": 0,
    "length": 10
});

// Output: https://yourapi.com/api/v1/contents?location=0&length=10
```

## API References

#### `stringify(params)`
쿼리스트링 문자열로 변환한다.

- **Parameters**:
  - `params` (object) - 쿼리스트링으로 변환할 파라미터. 파라미터의 값은 URL 인코딩된다.

- **Returns**: `string` - 쿼리스트링
