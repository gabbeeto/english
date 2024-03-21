import {ReactNode} from "react";
import About from './About'
import Why from './Why'
import HomeWork from './homework/Main'



export default function Header(): ReactNode {
let styleForContainer: string = "bg-gradient-to-tr from-cyan-950 to-emerald-950 text-white text-center rounded-2xl p-2 containerExtras "
return ( <main className="flex flex-col gap-2 items-center justify-center bg-cyan-900">
<About containerStyle={styleForContainer} / >
<Why containerStyle={styleForContainer} / >
<HomeWork containerStyle={styleForContainer} / >

</main>

)

}
