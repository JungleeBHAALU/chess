
var black={
     'king':{cell:'14',status:'active',role:'king',src:'chessPieces/blackKing.JPG',id:'bk'},
     'queen1':{cell:'15',status:'active',role:'queen',src:'chessPieces/blackQueen.JPG',id:'bq'},
     'bishop1':{cell:'13',status:'active',role:'bishop',src:'chessPieces/blackBishop.JPG',id:'bb1'},
     'bishop2':{cell:'16',status:'active',role:'bishop',src:'chessPieces/blackBishop.JPG',id:'bb2'},
     'knight1':{cell:'12',status:'active',role:'knight',src:'chessPieces/blackKnight.JPG',id:'bk1'},
     'knight2':{cell:'17',status:'active',role:'knight',src:'chessPieces/blackKnight.JPG',id:'bk2'},
     'rook1':{cell:'11',status:'active',role:'rook',src:'chessPieces/blackRook.JPG',id:'br1'},
     'rook2':{cell:'18',status:'active',role:'rook',src:'chessPieces/blackRook.JPG',id:'br2'},
     'pawn1':{cell:'21',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp1'},
     'pawn2':{cell:'22',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp2'},
     'pawn3':{cell:'23',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp3'},
     'pawn4':{cell:'24',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp4'},
     'pawn5':{cell:'25',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp5'},
     'pawn6':{cell:'26',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp6'},
     'pawn7':{cell:'27',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp7'},
     'pawn8':{cell:'28',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp8'}
    
};
var white={
    'king':{cell:'84',status:'active',role:'king',src:'chessPieces/whiteKing.JPG',id:'wk'},
    'queen1':{cell:'85',status:'active',role:'queen',src:'chessPieces/whiteQueen.JPG',id:'wq'},
    'bishop1':{cell:'83',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb1'},
    'bishop2':{cell:'86',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb2'},
    'knight1':{cell:'82',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG',id:'wk1'},
    'knight2':{cell:'87',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG',id:'wk2'},
    'rook1':{cell:'81',status:'active',role:'rook',src:'chessPieces/whiteRook.JPG',id:'wr1'},
    'rook2':{cell:'88',status:'active',role:'rook',src:'chessPieces/whiteRook.JPG',id:'wr2'},
    'pawn1':{cell:'71',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp1'},
    'pawn2':{cell:'72',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp2'},
    'pawn3':{cell:'73',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp3'},
    'pawn4':{cell:'74',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp4'},
    'pawn5':{cell:'75',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp5'},
    'pawn6':{cell:'76',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp6'},
    'pawn7':{cell:'77',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp7'},
    'pawn8':{cell:'78',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp8'}
};

var playerCount=0;
var lastPathArr=[];

function playerTurn(){ //enables Player turn 
 
    console.log(black.king.id);
if(playerCount==0){
   enablePlayerToPlay(black);
   disablePlayerToPlay(white);
}
else{
    enablePlayerToPlay(white);
    disablePlayerToPlay(black);
}
}


function  enablePlayerToPlay(playerObj){ //allow pieces of active player to be selected
    //var keys = [];
    //console.log(black['king']['id']);
    for(var k in playerObj){
         if(playerObj[k]['status']=='active'){
               var elem=document.getElementById(playerObj[k]['id']);
               elem.setAttribute("onclick","selectPiece('"+playerObj[k]['id']+"')");
         }
    };

    
}

function disablePlayerToPlay(playerObj){ //disable pieces of non-active player to be selected
     //var keys = [];
     //console.log(black['king']['id']);
     for(var k in playerObj){
          if(playerObj[k]['status']=='active'){
               var elem=document.getElementById(playerObj[k]['id']);
               elem.onclick="";
          }
     };
 
     
 }
 

function selectPiece(pieceId){  //selects piece and calls showPath()
     removeHighlightPath();
    console.log("hi there i'm "+pieceId);

    calculatePath(pieceId);
}


function calculatePath(chessPieceId){  //calculates path
     debugger;
var enemyArr=[];
var friendlyArr=[];
var  playerObj={};

      if(playerCount==0){
          enemyArr=PostionArrayWhite();     //returns array
          friendlyArr=PostionArrayblack();     //returns array
          playerObj=black;
    }
     else{
          enemyArr=PostionArrayblack();     //returns array
          friendlyArr=PostionArrayWhite();     //returns array
          playerObj=white;
    }
if(chessPieceId.charAt(1)=='p'&&playerObj['pawn'+chessPieceId.charAt(2)]['role']=='pawn'){
     highlightPath(pawnsPath(chessBoxIdGiver(chessPieceId),chessPieceId,enemyArr,friendlyArr),chessPieceId);
    }
else if(chessPieceId.charAt(1)=='r'||(chessPieceId.charAt(1)=='p'&&playerObj['pawn'+chessPieceId.charAt(2)]['role']=='rook')){
     highlightPath(rooksPath(chessBoxIdGiver(chessPieceId),enemyArr,friendlyArr),chessPieceId);
    }
else if(chessPieceId.charAt(1)=='b'||(chessPieceId.charAt(1)=='p'&&playerObj['pawn'+chessPieceId.charAt(2)]['role']=='bishop')){
     highlightPath(bishopPath(chessBoxIdGiver(chessPieceId),enemyArr,friendlyArr),chessPieceId);
    }
else if((chessPieceId.charAt(1)=='k'&&chessPieceId.length==3)||(chessPieceId.charAt(1)=='p'&&playerObj['pawn'+chessPieceId.charAt(2)]['role']=='knight')){
     highlightPath(knightsPath(chessBoxIdGiver(chessPieceId),enemyArr,friendlyArr),chessPieceId);
    }
else if(chessPieceId.charAt(1)=='q'||(chessPieceId.charAt(1)=='p'&&playerObj['pawn'+chessPieceId.charAt(2)]['role']=='queen')){
     highlightPath(queensPath(chessBoxIdGiver(chessPieceId),enemyArr,friendlyArr),chessPieceId);
    }
else if(chessPieceId.charAt(1)=='k'&&chessPieceId.length==2){
     highlightPath(kingsPath(chessBoxIdGiver(chessPieceId),enemyArr,friendlyArr),chessPieceId);
    }





}

function highlightPath(pathIdArr,chessPieceId){                     //highlight the path of piece and applies onlick event on boxes
for(var i=0;i<pathIdArr.length;i++){                                
     var elem=document.getElementById(pathIdArr[i].toString());
     elem.className+=' '+'blink';
     elem.setAttribute("onclick","Action('"+chessPieceId+"','"+pathIdArr[i].toString()+"')");
}
lastPathArr=pathIdArr;
}

function removeHighlightPath(){                                   //remove highlight and onlick event on boxes

 for(var i=0;i<lastPathArr.length;i++){
      var elem=document.getElementById(lastPathArr[i].toString());
     elem.className = elem.className.replace(/\bblink\b/g, "");
   elem.onclick="";
 }


}

function Action(chessPieceId,chessboxId){                          //used for taking action i.e move pieces kill pieces
     var enemyArr=[];                                              
if(playerCount==0){                                                
     enemyArr=PostionArrayWhite();                                 //returns enemy Array
     if(enemyArr.includes(chessboxId)){                           
          var element = document.getElementById(chessboxId);     
          element.removeChild(element.childNodes[0]);                            //deletes enemy piece
          markPieceDeadInObj(white,chessboxId);                    //changes status=dead function in playerObj
     }
     MovePiece(chessboxId,chessPieceId,black);
     removeHighlightPath();
}
else{
     enemyArr=PostionArrayblack();                                  //returns enemy Array
     if(enemyArr.includes(chessboxId)){
          var element = document.getElementById(chessboxId);      
          element.removeChild(element.childNodes[0]);                           //deletes enemy piece
          markPieceDeadInObj(black,chessboxId);                     //changes status=dead function in playerObj
     }
     
    MovePiece(chessboxId,chessPieceId,white);
     removeHighlightPath();
}

}

function changePlayer(){
     if(playerCount==0){
          playerCount=1;
          playerTurn();
     }
     else{
          playerCount=0;
          playerTurn();
     }
}

function MovePiece(chessboxId,chessPieceId,playerObj){              //moves piece
     debugger;
     var elem1=document.getElementById(chessPieceId);
     elem1.remove();                                                //remove from initial cell
     var elem = document.createElement("img");
     elem.setAttribute("id",chessPieceId);
     for(var k in playerObj){
          if(playerObj[k]['id']==chessPieceId){
               elem.src=playerObj[k]['src'];
               playerObj[k]['cell']=chessboxId;                         //changes cell in playerObj
               break;
          }
     }    
     
     if(chessPieceId.charAt(1)=='p'){                                   //special Condition for pawns only
          if(playerCount==0&&chessboxId.charAt(0)=='8'){
               enableRoleChangeDiv(chessboxId,chessPieceId);
          }
          else if(playerCount==1&&chessboxId.charAt(0)=='1'){
               enableRoleChangeDiv(chessboxId,chessPieceId);
          }
          else if(playerObj['pawn'+chessPieceId.charAt(2)]['fresh']=='yes'){ //special condition for pawns for thier first play
               playerObj['pawn'+chessPieceId.charAt(2)]['fresh']='no';
               document.getElementById(chessboxId).appendChild(elem);
               changePlayer();
          }
          else{
               document.getElementById(chessboxId).appendChild(elem);
               changePlayer();
          }
     }
     else{
          document.getElementById(chessboxId).appendChild(elem);      //move piece to cell(box)
          changePlayer();
     }

    

    
    
}

function enableRoleChangeDiv(chessboxId,chessPieceId){                                                      //change role of pawn function 1
debugger;
     document.getElementById("chooseRole").style.display="block";
//document.getElementById("changeRoleBtn").onclick="changeRoleOfPawn('"+chessPieceId+"','"+chessboxId+"')";
document.getElementById("changeRoleBtn").setAttribute("onclick","changeRoleOfPawn('"+chessPieceId+"','"+chessboxId+"')");

}

function changeRoleOfPawn(chessPieceId,chessboxId){                                                         //change role of pawn function 2
     if (document.getElementById('role_r').checked) {
          RoleOfPawn(chessboxId,chessPieceId,'rook');
        }
     else if (document.getElementById('role_q').checked) {
          RoleOfPawn(chessboxId,chessPieceId,'queen');
        }
     else if (document.getElementById('role_b').checked) {
          RoleOfPawn(chessboxId,chessPieceId,'bishop');
        }
     else if (document.getElementById('role_k').checked) {
          RoleOfPawn(chessboxId,chessPieceId,'knight');
        }
     else{

     }
}

function RoleOfPawn(chessboxId,chessPieceId,role){                                                             //change role of pawn function 3
     if(chessPieceId.charAt(0)=='b'){
          FinalRoleChangeOfPawn(chessboxId,chessPieceId,role,black)
     }
     else{
          FinalRoleChangeOfPawn(chessboxId,chessPieceId,role,white)
     }
}

function FinalRoleChangeOfPawn(chessboxId,chessPieceId,role,playerObj){                                        //change role of pawn function 4
     var elem = document.createElement("img");
     elem.setAttribute("id",chessPieceId);
     elem.src=playerObj[role+'1']['src'];
     for(var k in playerObj){
          if(playerObj[k]['id']==chessPieceId){
               playerObj[k]['role']=role;                        //changes role in player obj
               playerObj[k]['src']=playerObj[role+'1']['src'];   // changes src of img of chess piece
               playerObj[k]['cell']=chessboxId;                  
               break;
          }
     }   
     document.getElementById(chessboxId).appendChild(elem);    
     changePlayer();  
} 

function markPieceDeadInObj(playerObj,chessBoxId){               //changes status=dead function in playerObj
for(var k in playerObj){
     if(playerObj[k]['cell']==chessBoxId)
     {
          playerObj[k]['status']='dead';                         //marks status='dead' in playerObj
          playerObj[k]['cell']='0'
          break;
     }
}
}

function chessBoxIdGiver(chessPieceId){     //returns chessBoxId id chess piec
     var chessBoxId="";
     if(playerCount==0){
    
          for(var k in black){
               if(black[k]['id']==chessPieceId){
                    chessBoxId=black[k]['cell'];
               }
          }
   //    console.log(chessBoxId);
     }
     else{
          for(var k in white){
               if(white[k]['id']==chessPieceId){
                    chessBoxId=white[k]['cell'];
               }
          }
   //    console.log(chessBoxId);
  
     }
     return chessBoxId;
}



function PostionArrayWhite(){    //return white position array of ids
         
     var whitePositionArr=[]
     for(var k in white){
          whitePositionArr.push(white[k]['cell']);
       };
   //    console.log(whitePositionArr);
   return whitePositionArr;
}

function PostionArrayblack(){    //return black position array of ids
     var blackPositionArr=[]
     for(var k in black){
          blackPositionArr.push(black[k]['cell']);
       };
   //    console.log(blackPositionArr);
   return blackPositionArr;
}

function  RoleChange(playerObj,chessPieceId){

}

function pawnsPath(chessBoxId,chessPieceId,enemyArr,friendlyArr) {              //pawn's path calculater function
//debugger;
var pathIdArr=[];                           //id array of possible path


var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4

var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4

if(playerCount==0){
     var flag=0;
     if(black['pawn'+chessPieceId.charAt(2)]['fresh']=='yes'){
         if((x+1)<=8){                                          //for one step ahead
               if(!(enemyArr.includes(((x+1)*10+y).toString()) || friendlyArr.includes(((x+1)*10+y).toString()))){ //checks enemy or freindly troops are there
                    pathIdArr.push((x+1)*10+y);
               }
               else{
                    flag++;
               }
               if((y-1)>=1){
                 if(enemyArr.includes(((x+1)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+1)*10+(y-1));  
                    }
               }  
            if((y+1)<=8){
               if(enemyArr.includes(((x+1)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+1)*10+(y+1));  
                    }
               }  
         }
         
         //for two steps ahead
         if(flag==0){
               if(!(enemyArr.includes(((x+2)*10+y).toString()) || friendlyArr.includes(((x+2)*10+y).toString()))){ //checks enemy or freindly troops are there
               pathIdArr.push((x+2)*10+y);
               }
               if((y-1)>=1){
                    if(enemyArr.includes(((x+2)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+2)*10+(y-1));  
                    }
               }  
            if((y+1)<=8){
               if(enemyArr.includes(((x+2)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+2)*10+(y+1));  
               }
            }  
         }
         
         
     }
     else{
          if((x+1)<=8){                                          //for one step ahead
               if(!(enemyArr.includes(((x+1)*10+y).toString()) || friendlyArr.includes(((x+1)*10+y).toString()))){ //checks enemy or freindly troops are there
                    pathIdArr.push((x+1)*10+y);
               }
               if((y-1)>=1){
                 if(enemyArr.includes(((x+1)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+1)*10+(y-1));  
                    }
               }  
            if((y+1)<=8){
               if(enemyArr.includes(((x+1)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                    pathIdArr.push((x+1)*10+(y+1));  
                    }
               }  
         }
     }

}
else{
var flag=0;
     if(white['pawn'+chessPieceId.charAt(2)]['fresh']=='yes'){
          if((x-1)>=1){                                          //for one step ahead
                if(!(enemyArr.includes(((x-1)*10+y).toString()) || friendlyArr.includes(((x-1)*10+y).toString()))){ //checks enemy or freindly troops are there
                     pathIdArr.push((x-1)*10+y);
                }
                else{
                    flag++;
                }
                if((y-1)>=1){
                  if(enemyArr.includes(((x-1)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-1)*10+(y-1));  
                     }
                }  
             if((y+1)<=8){
                if(enemyArr.includes(((x-1)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-1)*10+(y+1));  
                     }
                }  
          }
          
          //for two steps ahead
          if(flag==0){
          if(!(enemyArr.includes(((x-2)*10+y).toString()) || friendlyArr.includes(((x-2)*10+y).toString()))){ //checks enemy or freindly troops are there
                pathIdArr.push((x-2)*10+y);
          }
                if((y-1)>=1){
                  if(enemyArr.includes(((x-2)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-2)*10+(y-1));  
                }
           }  
             if((y+1)<=8){
                if(enemyArr.includes(((x-2)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-2)*10+(y+1));  
                }
             }  
          }
          
          
      }
      else{
           if((x-1)<=8){                                          //for one step ahead
                if(!(enemyArr.includes(((x-1)*10+y).toString()) || friendlyArr.includes(((x-1)*10+y).toString()))){ //checks enemy or freindly troops are there
                     pathIdArr.push((x-1)*10+y);
                }
                if((y-1)>=1){
                  if(enemyArr.includes(((x-1)*10+(y-1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-1)*10+(y-1));  
                     }
                }  
             if((y+1)<=8){
                if(enemyArr.includes(((x-1)*10+(y+1)).toString())){     //checks enemy troops are there and then adds id 
                     pathIdArr.push((x-1)*10+(y+1));  
                     }
                }  
          }
      }
 
}

console.log(pathIdArr);
return pathIdArr;
}


function rooksPath(chessBoxId,enemyArr,friendlyArr) {              //rook path calculater function

     var pathIdArr=[];                           //id array of path
     
     var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
     
     var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
       
     for(var i=x,j=y+1;j<=8;j++){
          if(enemyArr.includes((i*10+j).toString())){
               pathIdArr.push(i*10+j);
               break;
          }
          else if(friendlyArr.includes((i*10+j).toString())){
               break;
          }
          else{
               pathIdArr.push(i*10+j);
          }
           
       }
     
     for(var i=x,j=y-1;j>=1;j--){
          if(enemyArr.includes((i*10+j).toString())){
               pathIdArr.push(i*10+j);
               break;
          }
          else if(friendlyArr.includes((i*10+j).toString())){
               break;
          }
          else{
               pathIdArr.push(i*10+j);
          }
       }
     
     for(var i=x+1,j=y;i<=8;i++){
          if(enemyArr.includes((i*10+j).toString())){
               pathIdArr.push(i*10+j);
               break;
          }
          else if(friendlyArr.includes((i*10+j).toString())){
               break;
          }
          else{
               pathIdArr.push(i*10+j);
          }
       }
     
     for(var i=x-1,j=y;i>=1;i--){
          if(enemyArr.includes((i*10+j).toString())){
               pathIdArr.push(i*10+j);
               break;
          }
          else if(friendlyArr.includes((i*10+j).toString())){
               break;
          }
          else{
               pathIdArr.push(i*10+j);
          }
       }
     
     //console.log(pathIdArr);                  //prints the array 
     return pathIdArr;
     }

     function bishopPath(chessBoxId,enemyArr,friendlyArr) {              //bishop path calculater function

          var pathIdArr=[];                           //id array of possible path
          
          var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
          
          var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
            
          for(var i=x+1,j=y-1;i<=8&&j>=1;j--,i++){
                if(enemyArr.includes((i*10+j).toString())){
                pathIdArr.push(i*10+j);
                break;
                }
                else if(friendlyArr.includes((i*10+j).toString())){
                break;
                }
                else{
                pathIdArr.push(i*10+j);
                }
           }
          
          for(var i=x-1,j=y+1;i>=1&&j<=8;i--,j++){
                if(enemyArr.includes((i*10+j).toString())){
                pathIdArr.push(i*10+j);
                break;
                }
                else if(friendlyArr.includes((i*10+j).toString())){
                break;
                }
                else{
                pathIdArr.push(i*10+j);
                }
           }
          
          for(var i=x+1,j=y+1;i<=8&&j<=8;i++,j++){
                if(enemyArr.includes((i*10+j).toString())){
                pathIdArr.push(i*10+j);
                break;
                }
                else if(friendlyArr.includes((i*10+j).toString())){
                break;
                }
                else{
                pathIdArr.push(i*10+j);
                }
           }
          
          for(var i=x-1,j=y-1;i>=1&&j>=1;i--,j--){
                if(enemyArr.includes((i*10+j).toString())){
                pathIdArr.push(i*10+j);
                break;
                }
                else if(friendlyArr.includes((i*10+j).toString())){
                break;
                }
                else{
                pathIdArr.push(i*10+j);
                }
          }
          
      //    console.log(pathIdArr);                  //prints the array 
          return pathIdArr;
          }
     
     function queensPath(chessBoxId,enemyArr,friendlyArr) {              //queen's path calculater function
          var pathIdArr=[];                           //id array of possible path
          var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
          var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
      for(var i=x,j=y+1;j<=8;j++){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x,j=y-1;j>=1;j--){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x+1,j=y;i<=8;i++){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x-1,j=y;i>=1;i--){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x+1,j=y-1;i<=8&&j>=1;j--,i++){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x-1,j=y+1;i>=1&&j<=8;i--,j++){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
          
      for(var i=x+1,j=y+1;i<=8&&j<=8;i++,j++){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      for(var i=x-1,j=y-1;i>=1&&j>=1;i--,j--){
            if(enemyArr.includes((i*10+j).toString())){
            pathIdArr.push(i*10+j);
            break;
            }
            else if(friendlyArr.includes((i*10+j).toString())){
            break;
            }
            else{
            pathIdArr.push(i*10+j);
            }
       }
      console.log(pathIdArr);                  //prints the array 
      return pathIdArr;
  }

  function knightsPath(chessBoxId,enemyArr,friendlyArr) {              //knight's path calculater function

        var pathIdArr=[];                           //id array of possible path
        
        var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
        
        var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
     if((x+2)<=8){                                //for top(left,right) path
          if((y-1)>=1){                           //left
              //    pathIdArr.push(((x+2)*10)+(y-1))   
                  if(enemyArr.includes((((x+2)*10)+(y-1)).toString())){
                    pathIdArr.push(((x+2)*10)+(y-1));
                   
                    }
                    else if(friendlyArr.includes((((x+2)*10)+(y-1)).toString())){
                    
                    }
                    else{
                    pathIdArr.push(((x+2)*10)+(y-1));
                    }
          }
          if((y+1)<=8){                           //right
              // pathIdArr.push(((x+2)*10)+(y+1))
              if(enemyArr.includes((((x+2)*10)+(y+1)).toString())){
               pathIdArr.push(((x+2)*10)+(y+1));
               
               }
               else if(friendlyArr.includes((((x+2)*10)+(y+1)).toString())){
               
               }
               else{
               pathIdArr.push(((x+2)*10)+(y+1));
               }
          }
        }
     if((x-2)>=1){                               //for bottom(left,right) path                                      
          if((y-1)>=1){                             //left
             //  pathIdArr.push(((x-2)*10)+(y-1))
             if(enemyArr.includes((((x-2)*10)+(y-1)).toString())){
               pathIdArr.push(((x-2)*10)+(y-1));
               
               }
               else if(friendlyArr.includes((((x-2)*10)+(y-1)).toString())){
               
               }
               else{
               pathIdArr.push(((x-2)*10)+(y-1));
               }
          }
          if((y+1)<=8){                             //right
           // pathIdArr.push(((x-2)*10)+(y+1))
           if(enemyArr.includes((((x-2)*10)+(y+1)).toString())){
               pathIdArr.push(((x-2)*10)+(y+1));
              
               }
               else if(friendlyArr.includes((((x-2)*10)+(y+1)).toString())){
             
               }
               else{
               pathIdArr.push(((x-2)*10)+(y+1));
               }
          }
     }
     if((y-2)>=1){                               //for left(top,bottom) path                                      
          if((x-1)>=1){                            //bottom
              // pathIdArr.push(((x-1)*10)+(y-2))
              if(enemyArr.includes((((x-1)*10)+(y-2)).toString())){
               pathIdArr.push(((x-1)*10)+(y-2));
              
               }
               else if(friendlyArr.includes((((x-1)*10)+(y-2)).toString())){
              
               }
               else{
               pathIdArr.push(((x-1)*10)+(y-2));
               }
          }
          if((x+1)<=8){                            //top
            //pathIdArr.push(((x+1)*10)+(y-2))
            if(enemyArr.includes((((x+1)*10)+(y-2)).toString())){
               pathIdArr.push(((x+1)*10)+(y-2));
              
               }
               else if(friendlyArr.includes((((x+1)*10)+(y-2)).toString())){
              
               }
               else{
               pathIdArr.push(((x+1)*10)+(y-2));
               }
          }
     }
     if((y+2)<=8){                               //for left(top,bottom) path                                      
          if((x-1)>=1){                            //bottom
              // pathIdArr.push(((x-1)*10)+(y+2))
              if(enemyArr.includes((((x-1)*10)+(y+2)).toString())){
               pathIdArr.push(((x-1)*10)+(y+2));
              
               }
               else if(friendlyArr.includes((((x-1)*10)+(y+2)).toString())){
              
               }
               else{
               pathIdArr.push(((x-1)*10)+(y+2));
               }
          }
          if((x+1)<=8){                            //top
           // pathIdArr.push(((x+1)*10)+(y+2))
           if(enemyArr.includes((((x+1)*10)+(y+2)).toString())){
               pathIdArr.push(((x+1)*10)+(y+2));
              
               }
               else if(friendlyArr.includes((((x+1)*10)+(y+2)).toString())){
              
               }
               else{
               pathIdArr.push(((x+1)*10)+(y+2));
               }
          }
     }

     console.log(pathIdArr);                  //prints the array 
     return pathIdArr;
} 
      

function kingsPath(chessBoxId,enemyArr,friendlyArr) {              //king's path calculater function

var pathIdArr=[];                           //id array of possible path

var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4

var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4

if((x+1)<=8){
     //pathIdArr.push((x+1)*10+y)
     if(enemyArr.includes(((x+1)*10+y).toString())){
          pathIdArr.push((x+1)*10+y);
         
          }
          else if(friendlyArr.includes(((x+1)*10+y).toString())){
         
          }
          else{
          pathIdArr.push((x+1)*10+y);
          }
}
if((x-1)>=1){
   //  pathIdArr.push((x-1)*10+y)
   if(enemyArr.includes(((x-1)*10+y).toString())){
     pathIdArr.push((x-1)*10+y);
    
     }
     else if(friendlyArr.includes(((x-1)*10+y).toString())){
    
     }
     else{
     pathIdArr.push((x-1)*10+y);
     }
}
if((y+1)<=8){
   //  pathIdArr.push(x*10+(y+1))
   if(enemyArr.includes((x*10+(y+1)).toString())){
     pathIdArr.push(x*10+(y+1));
    
     }
     else if(friendlyArr.includes((x*10+(y+1)).toString())){
    
     }
     else{
     pathIdArr.push(x*10+(y+1));
     }
}
if((y-1)>=1){
    // pathIdArr.push(x*10+(y-1))
     if(enemyArr.includes(x*10+(y-1).toString())){
          pathIdArr.push(x*10+(y-1));
         
          }
          else if(friendlyArr.includes(x*10+(y-1).toString())){
         
          }
          else{
          pathIdArr.push(x*10+(y-1));
          }
}

console.log(pathIdArr);                  //prints the array 
return pathIdArr;
} 