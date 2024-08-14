# cookie-validator-check

`cookie-validator-check` is a simple utility package that helps in validating cookies to ensure they contain the desired key-value pair. This validation occurs when the document becomes visible (e.g., when a user switches tabs). If the condition is met, the user can be redirected to a specified URL.

## Installation

To install the package, run:

```bash
npm install cookie-validator-check
```

## Usage
You can use cookie-validator-check by importing it into your project and configuring it with the required properties.

### Example
```bash
<CookieChecker 
    cookieName="myCookie"
    url="/login"
    jsonKey="userLoggedIn"
    guardClause={true}
/>
```

## Props

- **`cookieName`** (string, required):  
  The name of the cookie stored in the browser's cookie storage.

- **`url`** (string, required):  
  The URL to redirect to if the specified condition is met.

- **`jsonKey`** (string, required):  
  The key to be found within the cookie's JSON value. This key is used to check if the cookie contains the desired data.

- **`guardClause`** (boolean, required):  
  A boolean value indicating whether the validation should take into account a guard clause. If `true`, the redirect occurs only if the specified condition is met.

## How It Works

`cookie-validator-check` runs when the document gains visibility (e.g., when the user switches tabs). It checks if the specified cookie contains a key-value pair matching the provided `jsonKey`. If the `guardClause` condition is met, the user is redirected to the specified `url`.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
