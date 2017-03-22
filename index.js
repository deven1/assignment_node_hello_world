var _ = require('lodash');
var chalk = require('chalk');
var error = chalk.bold.red;

// testing Lodash
var testArray = [1,2,3,4,5,6];
_.each(testArray, function(value) {
  console.log(value);
});

// testing Chalk
console.log(error('Error!'));
// style a string
console.log(chalk.blue('Hello world!'));

// combine styled and normal strings
console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));

// compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

//console.log("Jay Swaminarayan");
