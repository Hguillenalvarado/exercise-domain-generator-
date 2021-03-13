var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domi=['.com','.net','.us','.io']


 function aleatorio(){
            let aleatoriodomi=Math.floor(Math.random()*domi.length);
            return domi[aleatoriodomi]
}

for(i=0;i<pronoun.length;i++){
    for(j=0;j<adj.length;j++){
        for(k=0;k<noun.length;k++){
            console.log(pronoun[i] + adj[j] + noun[k] +aleatorio());
        }
        
    }
    
}