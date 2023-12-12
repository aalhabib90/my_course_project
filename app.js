const { program } = require("commander");
const chalk = require('chalk');

let todo = [];

program
  .version('1.0.0')
  .description('Simple todo list');

program
  .command('add <task>')
  .description('Add new task')
  .action((task) => {
    todo.push(task);
    console.log(chalk.green(`Added task: ${task}`));
  });

program
  .command('list')
  .description('list all tasks')
  .action(() => {
    console.log(chalk.green('to-do list: '));
    todo.forEach((task, index) => {
      console.log(`${index + 1} : ${task}`); 
    });
  });

program.parse(process.argv);
