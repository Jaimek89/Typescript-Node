/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Invalid or missing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Invalid or missing date')
    }

    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Invalid or missing weather')
    }

    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Invalid or missing visibility')
    }

    return visibilityFromRequest
}

const isWeather = (param: any): Boolean => {
    return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): Boolean => {
    return Object.values(Visibility).includes(param)
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}

export default toNewDiaryEntry
