var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domi=['.com','.net','.us','.io']

 /*function aleatorio(){
            let aleatoriodomi=Math.floor(Math.random()*domi.length);
            return domi[aleatoriodomi]
}*/ /* recomendación en mentoría no hacer funcion*/ 


/*
for(j=0;j<pronoun.length;j++){
    for(i=0;i<adj.length;i++){
    
        for(k=0;k<noun.length;k++){
            console.log(pronoun[j] + adj[i] + noun[k]);
        }
        
    }
    
}*/

/*usar foreach*/

pronoun.forEach(function(pron){
    adj.forEach(function(ad){
        noun.forEach(function(nou){
        console.log(pron + ad + nou);

    });

    });
});