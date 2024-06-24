
//選取所有id開頭為btn的元素 存到buttons裡
var buttons=document.querySelectorAll('[id^="btnN"]');
var ttt=["","","","","","","","","",];
var winLines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
var current='x';
var endOrNot=new Boolean(false);
var total=0;


buttons.forEach(function(abtn){
  abtn.style.backgroundColor='#606060';
  abtn.addEventListener('click',function(){markSpace(abtn.id);})
})
reset.addEventListener('click',function(){
    var i=1;
  
    endOrNot= false;
    current= 'x';

    for(i=0;i<9;i++){ttt[i]='';}
    btnN1.style.backgroundColor='#606060';
    btnN2.style.backgroundColor='#606060';
    btnN3.style.backgroundColor='#606060';
    btnN4.style.backgroundColor='#606060';
    btnN5.style.backgroundColor='#606060';
    btnN6.style.backgroundColor='#606060';
    btnN7.style.backgroundColor='#606060';
    btnN8.style.backgroundColor='#606060';
    btnN9.style.backgroundColor='#606060';

    btnN1.innerText="";
    btnN2.innerText="";
    btnN3.innerText="";
    btnN4.innerText="";
    btnN5.innerText="";
    btnN6.innerText="";
    btnN7.innerText="";
    btnN8.innerText="";
    btnN9.innerText="";

    total=0;

    document.getElementById("result").innerHTML="結果";
  });
function markSpace(btnID)  {
if(endOrNot==true) {return 0;} ;

if(current=='x'){
var abtn=document.getElementById(btnID);
var pos=parseInt(btnID[4])-1;

if(ttt[pos]==""){
  ttt[pos]='x';
  abtn.style.backgroundColor='#cc4444';
  abtn.innerText='x';
  current='O';
  total++;
  check(); 

  if(!endOrNot){
   
    check();
  }
}

}
 

  if(endOrNot==true){return 0;}

  while(true)
  {
   pos=randInt(0,8);

    if(ttt[pos]=="")
    {
      btnID="btnN"+(pos+1);
      abtn=document.getElementById(btnID);
      ttt[pos]='O';
      abtn.style.backgroundColor='#57F287';
      abtn.innerText='O';
      current='x';
      total++;
      break;
    }
  }
  check();
}

function randInt(start,end)
{
  return Math.floor(Math.random()*(end-start+1))+start;
}

function check(){
  var ri,ci;
  var winOrNot=new Boolean(true);

  for(ri=0;ri<8;ri++)
  {
    winOrNot=true;
    for(ci=1;ci<3;ci++)
    {
      if(ttt[winLines[ri][ci]]==0) {winOrNot=false;break;}
      if(ttt[winLines[ri][ci]]!=ttt[winLines[ri][ci-1]]){winOrNot=false; break;}
    }

    if(winOrNot==true)
    {
      if(ttt[winLines[ri][0]]=='x'){document.getElementById("result").innerHTML="恭喜獲勝!!";}
      else {document.getElementById("result").innerHTML="你輸了";}

      endOrNot=true;
    }
    if(total==9){
      document.getElementById("result").innerHTML="平手"; endOrNot=true;}
  }

  }

markSpace