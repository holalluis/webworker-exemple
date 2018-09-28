self.addEventListener('message',function(ev){
  if(ev.data!='calcula'){
    console.log('ordre desconeguda');return;
  }

  console.log('calculant suma...')
  var resultat=0;
  for(var i=0;i<1e5;i++){
    resultat+=i;
  }
  self.postMessage(resultat);
});
