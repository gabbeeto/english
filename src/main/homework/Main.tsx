import {ReactNode} from "react";
import HashFnder from "./homeworkObjectForDisplay.js"


export default function HomeWork({containerStyle}: {containerStyle: string}): ReactNode {
let summaryOpen: Array[boolean] = [false, false, false, false]
if(window.location.hash == "#why"){
summaryOpen = [true, true, true, true]
}
const hashes = HashFnder()
console.log(hashes)
return ( <section id="why" className={`${hashes.current} ${containerStyle}`}><h2 className="textSize-2">Home Work</h2>





</section>

)

}
