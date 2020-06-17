
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

var playerCount=0;

function playerTurn(){ //enables Player turn 
   debugger;
    console.log(black.king.id);
if(playerCount==0){
   enablePlayerToPlay(black,white);
}
else{
    enablePlayerToPlay(white,black);
}
}


function  enablePlayerToPlay(playerObj,enemyObj){ //allow pieces of active player to be selected
    var keys = [];
    console.log(black['king']['id']);
    for(var k in playerObj){
       var elem=document.getElementById(playerObj[k]['id']);
       elem.setAttribute("onclick","selectPiece('"+playerObj[k]['id']+"')");
    };

    
}

function selectPiece(pieceId){  //selects piece and calls showPath()
    console.log("hi there i'm "+pieceId);
    var idArr=calculatePath(pieceId);
}

function calculatePath(){  //calculates path


}


