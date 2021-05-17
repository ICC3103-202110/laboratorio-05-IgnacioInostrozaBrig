const chalk = require('chalk');
const figlet = require('figlet');
const { printTable } = require('console-table-printer');
const inquirer = require('inquirer');

function getTitle(){
    return chalk.magentaBright(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount,billPercent,tip,totalbill} = model
    return [ {'Bill Amount ($)':'$'+billAmount}, {'Tip (%)':'%'+billPercent}, {'Tip':'$'+tip}, {'Total':'$'+totalbill},]
}

function inputForm(model){
    const {billAmount,billPercent,tip,totalbill} = model
    const message = 'Bill Amount? ($)'
    const message2 = 'Bill Percentage? (%)'
    return inquirer.prompt([
        {
            name: 'bill',
            type: 'input',
            message: message,
            default: billAmount,
            validate: function(value){
                if(isNaN(value)===false){
                    return true
                } else {
                    return 'Invalid Input'
                }
            }
        },
        {
            name: 'percent',
            type: 'input',
            message: message2,
            default: billPercent,
            validate: function(value2){
                if(isNaN(value2)===false){
                    return true
                } else {
                    return 'Invalid Input'
                }
            }
        }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}
