import {test as base} from "@playwright/test"

export type TestOptions = 
{
    GMAIL_URL: string
}

export const test =  base.extend<TestOptions>({

    GMAIL_URL : ['', {option:true}]

})