import {idols} from "./lovelivedata.json"
import {Idol} from "../types/json-shim"

export default class LoveLiveUtils {
    static TODAY = new Date(Date.now())
    private static getTZDayMonth(tz: string): [string, string] {
        var month = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            month: "numeric"
        })
        var day = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            day: "numeric"
        })

        return [month, day]
    }

    private static checkBirthday(i: Idol, tz: string): boolean {
        const [iMonth, iDay] = i.birthday.split("/")
        const [tMonth, tDay] = this.getTZDayMonth(tz)
        if(tMonth == iMonth && tDay == iDay) {
            return true
        }
        return false;
    }

    static getBirthdayIdol(): Idol | null {
        var today = new Date(Date.now())
        //Check JP birthday first
        for(var i of idols) {
            if(this.checkBirthday(i, "Asia/Tokyo")) {
                return i
            }
        }
        //Check US birthdays if no JP birthdays exist
        for(var i of idols) {
            if(this.checkBirthday(i, "America/Los_Angeles")) {
                return i
            }
        }
        return null
    }
}