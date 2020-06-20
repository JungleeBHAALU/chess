
var black={
     'king':{cell:'14',status:'active',role:'king',src:'chessPieces/blackKing.JPG',id:'bk'},
     'queen':{cell:'15',status:'active',role:'queen',src:'chessPieces/blackQueen.JPG',id:'bq'},
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
    'queen':{cell:'85',status:'active',role:'queen',src:'chessPieces/whiteQueen.JPG',id:'wq'},
    'bishop1':{cell:'83',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb1'},
    'bishop2':{cell:'86',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb2'},
    'knight1':{cell:'82',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG"',id:'wk1'},
    'knight2':{cell:'87',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG"',id:'wk2'},
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

var playerCount=1;



function start(chessBoxId) {              //rook path calculater function

var pathIdArr=[];                           //id array of path

var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4

var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
  
for(var i=x,j=y+1;j<=8;j++){
       pathIdArr.push(i*10+j);
  }

for(var i=x,j=y-1;j>=1;j--){
       pathIdArr.push(i*10+j);
  }

for(var i=x+1,j=y;i<=8;i++){
       pathIdArr.push(i*10+j);
  }

for(var i=x-1,j=y;i>=1;i--){
       pathIdArr.push(i*10+j);
  }

console.log(pathIdArr);                  //prints the array 
}


function bishopPath(chessBoxId) {              //bishop path calculater function

    var pathIdArr=[];                           //id array of possible path
    
    var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
    
    var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
      
    for(var i=x+1,j=y-1;i<=8&&j>=1;j--,i++){
           pathIdArr.push(i*10+j);
      }
    
    for(var i=x-1,j=y+1;i>=1&&j<=8;i--,j++){
           pathIdArr.push(i*10+j);
      }
    
    for(var i=x+1,j=y+1;i<=8&&j<=8;i++,j++){
           pathIdArr.push(i*10+j);
      }
    
    for(var i=x-1,j=y-1;i>=1&&j>=1;i--,j--){
           pathIdArr.push(i*10+j);
      }
    
    console.log(pathIdArr);                  //prints the array 
    }



function queensPath(chessBoxId) {              //queen's path calculater function
        var pathIdArr=[];                           //id array of possible path
        var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
        var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
    for(var i=x,j=y+1;j<=8;j++){
            pathIdArr.push(i*10+j);
       }
    for(var i=x,j=y-1;j>=1;j--){
            pathIdArr.push(i*10+j);
       }
    for(var i=x+1,j=y;i<=8;i++){
            pathIdArr.push(i*10+j);
       }
    for(var i=x-1,j=y;i>=1;i--){
            pathIdArr.push(i*10+j);
       }
    for(var i=x+1,j=y-1;i<=8&&j>=1;j--,i++){
               pathIdArr.push(i*10+j);
          }
    for(var i=x-1,j=y+1;i>=1&&j<=8;i--,j++){
               pathIdArr.push(i*10+j);
          }
        
    for(var i=x+1,j=y+1;i<=8&&j<=8;i++,j++){
               pathIdArr.push(i*10+j);
          }
    for(var i=x-1,j=y-1;i>=1&&j>=1;i--,j--){
               pathIdArr.push(i*10+j);
          }
    console.log(pathIdArr);                  //prints the array 
}

function knightsPath(chessBoxId) {              //knight's path calculater function

        var pathIdArr=[];                           //id array of possible path
        
        var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4
        
        var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4
     if((x+2)<=8){                                //for top(left,right) path
          if((y-1)>=1){                           //left
                  pathIdArr.push(((x+2)*10)+(y-1))   
          }
          if((y+1)<=8){                           //right
               pathIdArr.push(((x+2)*10)+(y+1))
          }
        }
     if((x-2)>=1){                               //for bottom(left,right) path                                      
          if((y-1)>=1){                             //left
               pathIdArr.push(((x-2)*10)+(y-1))
          }
          if((y+1)<=8){                             //right
            pathIdArr.push(((x-2)*10)+(y+1))
          }
     }
     if((y-2)>=1){                               //for left(top,bottom) path                                      
          if((x-1)>=1){                            //bottom
               pathIdArr.push(((x-1)*10)+(y-2))
          }
          if((x+1)<=8){                            //top
            pathIdArr.push(((x+1)*10)+(y-2))
          }
     }
     if((y+2)<=8){                               //for left(top,bottom) path                                      
          if((x-1)>=1){                            //bottom
               pathIdArr.push(((x-1)*10)+(y+2))
          }
          if((x+1)<=8){                            //top
            pathIdArr.push(((x+1)*10)+(y+2))
          }
     }

     console.log(pathIdArr);                  //prints the array 
} 

function kingsPath(chessBoxId) {              //king's path calculater function

var pathIdArr=[];                           //id array of possible path

var x=parseInt(chessBoxId.charAt(0));   //if 'chessBoxId=43' which is string,takes 1st char so x=4

var y=parseInt(chessBoxId.charAt(1));   //if 'chessBoxId=43' which is string,takes 2nd char so y=4

if((x+1)<=8){
     pathIdArr.push((x+1)*10+y)
}
if((x-1)>=1){
     pathIdArr.push((x-1)*10+y)
}
if((y+1)<=8){
     pathIdArr.push(x*10+(y+1))
}
if((y-1)>=1){
     pathIdArr.push(x*10+(y-1))
}

console.log(pathIdArr);                  //prints the array 
} 

function pawnsPath(chessBoxId,chessPieceId,enemyArr,friendlyArr) {              //pawn's path calculater function

var pathIdArr=[];                           //id array of possible path

var killArray=[];

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
}

function PostionArrayWhite(){    //return white position array of ids
         
     var whitePositionArr=[]
     for(var k in white){
          whitePositionArr.push(white[k]['cell']);
       };
     //  console.log(whitePositionArr);
     return whitePositionArr;
}
















function start1(){
// start('11');
// console.log('bishop path---------------------------------------------------------------------------------------');
// bishopPath('35'); 
// console.log('knights path---------------------------------------------------------------------------------------');
// knightsPath('55');
// console.log('knights path---------------------------------------------------------------------------------------');
// var enemyArr=['65'];
// var friendlyArr=['64'];

// pawnsPath('74','wp4',enemyArr,friendlyArr);
PostionArrayWhite();

}