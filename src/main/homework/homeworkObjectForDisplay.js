function tChild(arrayofChild){
for(let child of arrayofChild){
if(child.current == ''){
return ''
}
}
return 'hidden'
}


function hashEquality(hash){
if(`#${hash}` == window.location.hash){
return ''
}
else{
return 'hidden'
}
}

export default function(){
	const a1_1 = {current: hashEquality('a1_1')}
	const a1_2 = {current: hashEquality('a1_2')}
	const a1_3 = {current: hashEquality('a1_3')}

	const a1 = {current: tChild([a1_1,a1_2,a1_3]), a1_1, a1_2, a1_3}
	const a2 = {current: 'hidden'}
	const a = {current: tChild([a1,a2]),a1,a2}

	const b1 = {current: 'hidden'}
	const b2 = {current: 'hidden'}
	const b = {current: tChild([b1,b2]),b1,b2}

	const c1 = {current: 'hidden'}
	const c2 = {current: 'hidden'}
	const c = {current: tChild([c1,c2]),c1,c2}

	return {a,b,c, current: tChild([a,b,c])}
}
