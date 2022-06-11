# koch-snowflake-cli
Print the Koch Snowflake to the console!

## Usage
### Via `npx`:
```
$ npx koch-snowflake-cli <n>
$ npx koch-snowflake-cli <n> <size>
```

### Via Global Install
```
$ npm install --global koch-snowflake-cli
$ koch-snowflake-cli <n>
$ koch-snowflake-cli <n> <size>
```

### Via Import
```
$ npm install koch-snowflake-cli
```
then:
```
const koch_snowflake = require('koch-snowflake-cli');
console.log(koch_snowflake.create(<n>, <size>));
```