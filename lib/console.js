/**
 * @since 2016-11-22 16:16
 * @author vivaxy
 */

import chalk from 'chalk';

export const info = (...args) => {
    console.log(chalk.blue(...args));
};

export const error = (...args) => {
    console.log(chalk.red(...args));
};