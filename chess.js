
var black={
     'king':{cell:'04',status:'active',role:'king',src:'chessPieces/blackKing.JPG',id:'bk'},
     'queen':{cell:'05',status:'active',role:'queen',src:'chessPieces/blackQueen.JPG',id:'bq'},
     'bishop1':{cell:'03',status:'active',role:'bishop',src:'chessPieces/blackBishop.JPG',id:'bb1'},
     'bishop2':{cell:'06',status:'active',role:'bishop',src:'chessPieces/blackBishop.JPG',id:'bb2'},
     'knight1':{cell:'02',status:'active',role:'knight',src:'chessPieces/blackKnight.JPG',id:'bk1'},
     'knight2':{cell:'07',status:'active',role:'knight',src:'chessPieces/blackKnight.JPG',id:'bk2'},
     'rook1':{cell:'01',status:'active',role:'rook',src:'chessPieces/blackRook.JPG',id:'br1'},
     'rook2':{cell:'08',status:'active',role:'rook',src:'chessPieces/blackRook.JPG',id:'br2'},
     'pawn1':{cell:'11',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp1'},
     'pawn2':{cell:'12',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp2'},
     'pawn3':{cell:'13',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp3'},
     'pawn4':{cell:'14',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp4'},
     'pawn5':{cell:'15',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp5'},
     'pawn6':{cell:'16',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp6'},
     'pawn7':{cell:'17',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp7'},
     'pawn8':{cell:'18',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/blackPawn.JPG',id:'bp8'}
    
};
var white={
    'king':{cell:'74',status:'active',role:'king',src:'chessPieces/whiteKing.JPG',id:'wk'},
    'queen':{cell:'75',status:'active',role:'queen',src:'chessPieces/whiteQueen.JPG',id:'wq'},
    'bishop1':{cell:'73',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb1'},
    'bishop2':{cell:'76',status:'active',role:'bishop',src:'chessPieces/whiteBishop.JPG',id:'wb2'},
    'knight1':{cell:'72',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG"',id:'wk1'},
    'knight2':{cell:'77',status:'active',role:'knight',src:'chessPieces/whiteKnight.JPG"',id:'wk2'},
    'rook1':{cell:'71',status:'active',role:'rook',src:'chessPieces/whiteRook.JPG',id:'wr1'},
    'rook2':{cell:'78',status:'active',role:'rook',src:'chessPieces/whiteRook.JPG',id:'wr2'},
    'pawn1':{cell:'61',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp1'},
    'pawn2':{cell:'62',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp2'},
    'pawn3':{cell:'63',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp3'},
    'pawn4':{cell:'64',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp4'},
    'pawn5':{cell:'65',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp5'},
    'pawn6':{cell:'66',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp6'},
    'pawn7':{cell:'67',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp7'},
    'pawn8':{cell:'68',status:'active',role:'pawn',fresh:'yes',src:'chessPieces/whitePawn.JPG',id:'wp8'}
};

var playerCount=0;

function playerTurn(){ //enables Player turn 
   debugger;
    console.log(black.king.id);
if(playerCount==0){
   enablePlayerToPlay(black);
}
else{
    enablePlayerToPlay(white);
}
}


function  enablePlayerToPlay(playerObj){ //allow pieces of active player to be selected
    var keys = [];
    console.log(black['king']['id']);
    for(var k in playerObj){
       var elem=document.getElementById(playerObj[k]['id']);
       elem.setAttribute("onclick","selectPiece('"+playerObj[k]['id']+"')");
    };

    
}

function selectPiece(pieceId){
    console.log("hi there i'm "+pieceId);
}