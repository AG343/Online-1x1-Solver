var cube = document.querySelector('.cube');
var currentclass = '';
var radiobtn = document.querySelector('.radio-group');
var num;
function changeit() {
        num=Math.floor(Math.random()*6)+1
    console.log(num)
    if(num==1){
     num='top'
    }
    else if(num==2){
        num='front'
       }
       else if(num==3){
        num='right'
       }
       else if(num==4){
        num='left'
       }
       else if(num==5){
        num='back'
       }
       else if(num==6){
        num='bottom'
       }
  var showclass = 'show-' + num;
  console.log(showclass)
  if ( currentclass ) {
    cube.classList.remove( currentclass );
  }
  cube.classList.add(showclass);
  currentclass = showclass;
        
}




function scramble(){
   changeit()
}
function solve(){
  var front='front'
var showClass = 'show-' + front;
console.log(showClass)
if ( currentclass ) {
  cube.classList.remove( currentclass );
}
cube.classList.add(showClass);
currentclass = showClass;
}
