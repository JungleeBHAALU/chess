function start(chessPieceId) {              //rook path calculater function

var pathIdArr=[];                           //id array of path

var x=parseInt(chessPieceId.charAt(0));   //if 'chessPieceId=43' which is string,takes 1st char so x=4

var y=parseInt(chessPieceId.charAt(1));   //if 'chessPieceId=43' which is string,takes 2nd char so y=4
  
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


function bishopPath(chessPieceId) {              //bishop path calculater function

    var pathIdArr=[];                           //id array of possible path
    
    var x=parseInt(chessPieceId.charAt(0));   //if 'chessPieceId=43' which is string,takes 1st char so x=4
    
    var y=parseInt(chessPieceId.charAt(1));   //if 'chessPieceId=43' which is string,takes 2nd char so y=4
      
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



function queensPath(chessPieceId) {              //queen's path calculater function
        var pathIdArr=[];                           //id array of possible path
        var x=parseInt(chessPieceId.charAt(0));   //if 'chessPieceId=43' which is string,takes 1st char so x=4
        var y=parseInt(chessPieceId.charAt(1));   //if 'chessPieceId=43' which is string,takes 2nd char so y=4
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

function knightsPath(chessPieceId) {              //knight's path calculater function

        var pathIdArr=[];                           //id array of possible path
        
        var x=parseInt(chessPieceId.charAt(0));   //if 'chessPieceId=43' which is string,takes 1st char so x=4
        
        var y=parseInt(chessPieceId.charAt(1));   //if 'chessPieceId=43' which is string,takes 2nd char so y=4
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



















function start1(){
start('11');
console.log('bishop path---------------------------------------------------------------------------------------');
bishopPath('35'); 
console.log('knights path---------------------------------------------------------------------------------------');
knightsPath('55');
}