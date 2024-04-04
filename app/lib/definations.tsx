export type User = {
    id: string,
    name?:string,
    email: string,
    password:string
};

export type SleepData = {
    id: string,
    date: string,
    sleepTime: string,
    wakeupTime: string,
};

export type FormattedSleepData = {
    id: number,
    sleepTime: string,
    wakeupTime: string,
    duration: number
};