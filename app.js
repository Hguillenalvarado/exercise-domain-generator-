var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domi=['.com','.net','.us','.io']

 function aleatorio(){
            let aleatoriodomi=Math.floor(Math.random()*domi.length);
            return domi[aleatoriodomi]
}
for(j=0;j<pronoun.length;j++){
    for(i=0;i<adj.length;i++){
    
        for(k=0;k<noun.length;k++){
            console.log(pronoun[j] + adj[i] + noun[k]);
        }
        
    }
    
}