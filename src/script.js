let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];

window.onload= function(){
    let a= Math.floor(Math.random()*who.length);
    let b= Math.floor(Math.random()*action.length);
    let c= Math.floor(Math.random()*what.length);
    let d= Math.floor(Math.random()*when.length);
    document.getElementById('excuse').innerHTML= who[a]+action[b]+what[c]+when[d];
};



