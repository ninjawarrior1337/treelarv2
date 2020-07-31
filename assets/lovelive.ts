import {idols} from "./lovelivedata.json"
import {Idol} from "../types/json-shim"

export default class LoveLiveUtils {
    static getBirthdayIdol(): Idol | null {
        var today = new Date(Date.now())
        for(var i of idols) {
            const [iMonth, iDay] = i.birthday.split("/")
            var monthJP = today.toLocaleDateString("en-US", {
                timeZone: "Asia/Tokyo",
                month: "numeric"
            })
            var dayJP = today.toLocaleDateString("en-US", {
                timeZone: "Asia/Tokyo",
                day: "numeric"
            })
            var monthUS = today.toLocaleDateString("en-US", {
                timeZone: "America/Los_Angeles",
                month: "numeric"
            })
            var dayUS = today.toLocaleDateString("en-US", {
                timeZone: "America/Los_Angeles",
                day: "numeric"
            })
            if((monthJP == iMonth && dayJP == iDay) || (monthUS == iMonth && dayUS == iDay)) {
                return i
            }
        }
        return null
    }
}