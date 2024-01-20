# Topic 1: Getting Started with Node.js

## 1. Operating System Information (OS Module)

The `os` module in Node.js provides information about the operating system.

```jsx
const os = require('os');

// 1. Get the home directory of the current user
console.log(os.homedir());

// 2. Get the operating system type (e.g., 'Linux', 'Darwin', 'Windows_NT')
console.log(os.type());

// 3. Get the operating system version
console.log(os.version());

```

### Explanation:

- `os.homedir()`: Returns the home directory path of the current user.
- `os.type()`: Returns the operating system type.
- `os.version()`: Returns the operating system version.

## 2. File and Directory Information (path Module)

The `path` module in Node.js provides utilities for working with file and directory paths.

```jsx
const path = require('path');

// 1. Get the current directory (dirname) of the script
console.log(__dirname);

// 2. Get the current filename
console.log(__filename);

// 3. Get the directory name of the current filename using path
console.log(path.dirname(__filename));

// 4. Get the base filename (excluding directory) using path
console.log(path.basename(__filename));

// 5. Get the file extension using path
console.log(path.extname(__filename));

// 6. Parse the file path into an object using path
console.log(path.parse(__filename));

```

### Explanation:

- `__dirname`: Represents the directory name of the current module.
- `__filename`: Represents the filename of the current module.
- `path.dirname()`: Returns the directory name of a path.
- `path.basename()`: Returns the base filename of a path.
- `path.extname()`: Returns the file extension of a path.
- `path.parse()`: Parses a path into an object with directory, base, ext, name, and root properties.

## 4. Custom Module (Export math Module)

## 4. Custom Module (Import math Module)

Here, a custom module named 'math' is created to perform basic mathematical operations.

```jsx
// Importing the custom module without destructuring
const math = require('./math');
console.log(math.add(2, 5));
console.log(math.sub(2, 5));
console.log(math.mul(2, 5));
console.log(math.div(2, 5));

// Importing the custom module with destructuring
const { add, sub, mul, div } = require('./math');
console.log(add(4, 5));
console.log(sub(4, 5));
console.log(mul(4, 5));
console.log(div(4, 5));

```

### Explanation:

- `require('./math')`: Imports the custom 'math' module.
- `math.add()`, `math.sub()`, `math.mul()`, `math.div()`: Functions for addition, subtraction, multiplication, and division.
- `Destructuring` (`{ add, sub, mul, div }`): Allows direct access to individual functions from the module.