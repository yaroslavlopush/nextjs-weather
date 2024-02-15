import { WeatherApi } from '@/apis/apiWeather';

export interface MainInfo {
    city: string;
    weatherTitle: string;
    timeZone: string;
}

export interface Weather {
    temperature: number;
    humidity: number;
    city: string;
    wind: number;
    mainInfo: MainInfo;
    icon: string;
}

enum Weekday {
    Long = 'long',
    Short = 'short',
    Narrow = 'narrow',
}

enum Hour {
    Numeric = 'numeric',
    Twodigit = '2-digit',
}

enum Minute {
    Numeric = 'numeric',
    Twodigit = '2-digit',
}

export interface DateFormat {
    weekday: Weekday;
    hour: Hour;
    minute: Minute;
    timeZone: string;
}

export function parseDataForWidget(weatherData: WeatherApi): Weather | null {
    if (!weatherData) {
        return null;
    }

    const dataToShow = {
        temperature: weatherData?.main?.temp,
        humidity: weatherData?.main?.humidity,
        city: weatherData?.name,
        wind: weatherData?.wind?.speed,
        mainInfo: {
            city:  weatherData?.name,
            weatherTitle: weatherData && weatherData.weather && weatherData.weather[0].main,
            timeZone: getCurrentTimeByOffset(weatherData?.timezone),
        },
        icon: weatherData && weatherData.weather && weatherData.weather[0].icon,
    }

    return dataToShow;
}

export function getCurrentTimeByOffset(offsetSeconds: number): string {
    const offsetMilliseconds = offsetSeconds * 1000;
    const now = new Date();
    const currentTime = now.getTime();
    const timezoneOffset = now.getTimezoneOffset() * 60000;
    const targetTime = currentTime + timezoneOffset + offsetMilliseconds;
  
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
    
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const format = { timeZone, ...options };

    return new Date(targetTime).toLocaleString('en-US', format as DateFormat);
}

export function metersPerSecondToKmPerHour(mps: number): number {
    return Math.floor(mps * 3.6);
}

export function kelvinToFahrenheit(kelvin: number) {
    return Math.floor((kelvin - 273.15) * 9/5 + 32);
}

// Function to convert Kelvin to Celsius
export function kelvinToCelsius(kelvin: number) {
    return Math.floor(kelvin - 273.15);
}