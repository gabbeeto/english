import {ReactNode} from "react";

export default function About({containerStyle}: {containerStyle: string}): ReactNode {
return ( <section className={`${containerStyle} mt-2`} >
<h2 className="textSize-2">Bienvenidos</h2>
<p className="textSize-3 text-cyan-200"> Soy Gabriel, el profesor de inglés. Hago clases particulares para aprobar materias de la escuela y tambien enseño inglés para los que le interesa entender y hablar inglés. He aprendido hace mucho tiempo, no estoy seguro cuando empezé a aprender inglés pero estuve aprendiendo este idioma por más de 7 años. A pesar de aprender por más de 7 años, mi inglés sigue mejorando. quise hacer este curso para ayudar a las personas que les gustan este idioma como yo y que quieren aprender inglés real. Tengo conocimiento de academia pero mi mayor ventaja está en el inglés real que las personas nativas hablan. Este curso está hecho tanto adultos como niños que quieren poder hablar y entender inglés. Los que vienen para clases particulares de inglés, simplemente ayudaré con lo que necesitan ayuda.
Incluso viviendo en Argentina, en estos momentos estoy usando el inglés para mi vida diaria como aprender otras cosas no relacionadas al inglés porque es una ventaja enorme</p>
</section>

)

}
