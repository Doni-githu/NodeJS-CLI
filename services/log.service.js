import dedent from "dedent-js";
import chalk from "chalk";
const printError = (error) => {
    console.log(chalk.bgRed("Error") + ' ' + error);
}
const printSuccess = message => {
    console.log(chalk.bgGreen("Success") + ' ' + message);
}

const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan("HELP")}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
    `);
}


const printWeather = (response, icon) => {
    console.log(dedent`
        ${chalk.bgYellowBright('WEATHER')} City weather ${response.name}
        ${icon}   ${response.weather[0].description}
        Temperatura: ${response.main.temp} (feel like ${response.main.feels_like})
        Humadity: ${response.main.humidity}
        Wind speed: ${response.wind.speed}
    `);
}

export { printError, printSuccess, printHelp , printWeather}