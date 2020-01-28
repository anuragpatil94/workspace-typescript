/**
 * NO TYPE INFERENCE FOR ARGUMENTS hence Always add annotations for arguments
 * @param a :number
 * @param b :number
 *
 * TYPE INFERENCE ONLY ON RETURN
 */
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiphy = function(a: number, b: number): number {
  return a * b;
};

/**
 * All 3 statements return void
 * @param message string
 */
const logger = (message: string): void => {
  console.log(message);
  //   return null;
  //   return undefined;
};

/**
 * Only when it only throws error. if the function returns errors or return string then we annotate string
 * @param message string
 */
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todaysWeather);

// ES2015
const logWeather2015 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

// Destructuring
const logWeather2016 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
