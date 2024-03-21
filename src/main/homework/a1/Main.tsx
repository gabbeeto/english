import {ReactNode} from "react";

function A1_1({hashObj}){
return ( <section id="a1_1" className={`${hashObj.current} `}>

</section>)
}


function A1_2({hashObj}){
return ( <section id="a1_2" className={`${hashObj.current} `}>
</section>)
}


function A1_3({hashObj}){
return ( <section id="a1_3" className={`${hashObj.current} `}>
</section>)
}

export default function A1HomeWork({hashObj}): ReactNode {
return ( <section id="a1" className={`${hashObj.current}`}>
<A1_1  hashObj={hashObj.a1_1} / >
<A1_2  hashObj={hashObj.a1_2} / >
<A1_3  hashObj={hashObj.a1_3} / >
</section>

)

}
