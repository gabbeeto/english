import {ReactNode} from "react";


export default function HomeWork({containerStyle}: {containerStyle: string}): ReactNode {
let summaryOpen: Array[boolean] = [false, false, false, false]
if(window.location.hash == "#why"){
summaryOpen = [true, true, true, true]
}

return ( <section id="why" className={containerStyle}>
<h2 className="textSize-2">¿Por qué aprender inglés?</h2>





</section>

)

}
