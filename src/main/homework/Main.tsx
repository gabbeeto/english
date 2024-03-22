import {ReactNode} from "react";
import HashFnder from "./homeworkObjectForDisplay.js"
import A1HomeWork from "./a1/Main"
const firstLetter = window.location.hash[1]
const hashStartsWithA = firstLetter == 'a'

export default function HomeWork({containerStyle}: {containerStyle: string}): ReactNode {
let summaryOpen: Array[boolean] = [false, false, false, false]
if(window.location.hash == "#why"){
summaryOpen = [true, true, true, true]
}

const hashes = HashFnder()
return ( <section id="homework" className={`${hashes.current} ${containerStyle}`}><h2 className="textSize-2">Home Work</h2>
{ hashStartsWithA && <A1HomeWork hashObj={hashes.a.a1} / > }




</section>

)

}
