# 🌟 css-time-converter

Convert CSS time values like '2s' or '500ms' into a standard millisecond number with ease.

### Key Features:
- **Simple Conversion**: Effortlessly convert CSS time strings to milliseconds.
- **Lightweight**: Minimal code, maximum efficiency.
- **Versatile**: Supports both 's' (seconds) and 'ms' (milliseconds) formats.

## 🚀 Installation
To install css-time-converter, run the following command:

```bash
npm install css-time-converter
```

## 🛠 Getting Started
To get started, simply import the `convert` function into your JavaScript or TypeScript project:

```javascript
import convert from 'css-time-converter';
```

Then, use it to convert any CSS time string to milliseconds:

```javascript
const durationInMs = convert('2s'); // 2000
```

## 📸 Example
Here’s a quick example of how to use css-time-converter in your code:

```javascript
import convert from 'css-time-converter';

const animationDuration = '3.5s';
const durationInMs = convert(animationDuration);

console.log(`The duration in milliseconds is: ${durationInMs}`);
// Output: The duration in milliseconds is: 3500
```

## 🌟 Why Choose css-time-converter?
- **Accurate**: Ensures consistent conversion of CSS time values.
- **Easy to Use**: Just one function to handle all your time conversion needs.
- **Compact**: Only a few lines of code, perfect for any project size.

## 🌍 Supported Environments
css-time-converter is compatible with all modern browsers and Node.js environments.

## 🎨 Customization
The `convert` function is designed to be straightforward and doesn’t require customization. It works out of the box to convert any valid CSS time string.

## 🔧 Acknowledgments & Contributions
Feel free to fork, open issues, or submit pull requests to help improve this project.
