import {ReactNode} from "react";

export default function Why({containerStyle}: {containerStyle: string}): ReactNode {
return ( <section className={containerStyle}>
<h2 className="textSize-2 ">¿Por qué aprender inglés?</h2>
<dl>
<dt className="textSize-3">Acesso a contenido educativo en inglés</dt>
<dd className="textSize-5">Gracias a que sé inglés, pude aprender programacíon para hacer paginas web como esta. Hay mucho contenido educativo que no existe en español y por esa razón uso el inglés para aprender otras cosas(O ciertos contenidos existen pero la calidad es inferior) <span className="block textSize-6">Puedo hacer paginas más complicadas que esta, y estuve aprendiendo como hacer videojuegos usando el inglés pero mi computadora se rompio. Nunca he usado el español para aprender programacíon pero he escuchado que es casi imposible aprender programacíon sin saber inglés. Cuando una nueva tecnologia sale, la documentacíon siempre está en inglés y hay millones de videos o contenido educativo que solo está en inglés </span> </dd>


<dt className="textSize-3">Consumir contenido en su idioma original o consumir contenido que no existe en español</dt>
<dd className="textSize-5">Hay mucho contenido que no existe en español. Y no solo en el lado educativo, tambien en el entretenimiento. He jugador millones de juegos que no tienen traduccion o tienen una traduccion muy mala y lo mismo sucede con Youtube y otras redes sociales con creadores de contenido</dd>


<dt className="textSize-3">Desear vivir en otro pais o ser capaz de comunicarse con personas que no hablan español</dt>
<dd className="textSize-5">En lo personal, no me interesa salir del pais pero este es un motivo valido para muchas personas. A mí siempre me gustó interactuar con las personas por internet, y ver como personas muy diferentes a mí ven el mundo.</dd>


<dt className="textSize-3">Te gusta el idioma</dt>
<dd className="textSize-5">Este es la razón principal por la cual aprendí inglés por primera vez. Nunca planee aprender otras cosas usando el inglés o enseñar el idioma cuando empezé a aprender. Este idioma siempre me gustó desde el principio. Y aunque ahora le de otras utilidades muy diferentes al idioma, yo empezé a aprender inglés por curiosidad y porque me gustaba y lo pongo aquí porque esta bueno aprender algo si te gusta.</dd>


</dl>
</section>

)

}
