(this.webpackJsonprudrata=this.webpackJsonprudrata||[]).push([[0],{52:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var r=s(1),i=s(0),a=s.n(i),n=s(14),o=s.n(n),c=s(7),l=s(8),h=s(12),u=s(10),p=s(9),d=(s(44),s(62)),j=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{id:"how-to","data-testid":"how-to",style:{fontSize:"1.5em"},className:!0===this.props.altBackground?"bg-success text-light bg-transition p-2":" bg-transition p-2",children:[Object(r.jsx)("strong",{children:"How To Play"}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Click on any square"})," to place a knight and start the game. Your goal is to ",Object(r.jsx)("strong",{children:"visit each square"})," on the chessboard ",Object(r.jsx)("strong",{children:"exactly once"}),"."]}),Object(r.jsxs)("p",{children:['Click on any square to move the knight to it. As in chess, the knight may only move in an "L" shape:'," ",Object(r.jsx)("strong",{children:"two squares vertically and one horizontally"}),", or"," ",Object(r.jsx)("strong",{children:"two squares horizontally and one square vertically"}),"."]}),Object(r.jsxs)("p",{children:["If you are able to tour the entire chess board, ",Object(r.jsx)("strong",{children:"something mysterious might happen!"})]})]})})}}]),s}(i.Component),f=s(63),b=s(64);function g(e){return Object(r.jsx)("div",{"data-testid":"scoreboard",className:"h4 rounded col-12",children:Object(r.jsxs)(f.a,{className:"font-weight-bold rounded d-flex flex-column pb-2 bg-success",children:[Object(r.jsx)("p",{className:"text-light text-center",children:"Score"}),Object(r.jsxs)(b.a,{variant:"success",className:"font-weight-bold",children:[e.currentScore,"/",Math.pow(e.order,2)]})]})})}var v=s(13),m=s(68),O=s(65),S=s(33);var x=function(e){var t=a.a.useState(!0),s=Object(v.a)(t,2),i=s[0],n=s[1];return i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m.a,{className:"position-absolute mt-5 fade",show:i,variant:"danger",children:[Object(r.jsx)(m.a.Heading,{className:"text-center",children:"Game Over"}),Object(r.jsxs)("p",{className:"text-center",children:["Your final score is: ",e.score]}),Object(r.jsx)("hr",{className:"bg-light"}),Object(r.jsx)("div",{className:"d-flex justify-content-end",children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.a,{children:Object(r.jsx)(S.a,{onClick:e.newGame,className:"h-100 w-100",variant:"outline-light",children:"New Game"})}),Object(r.jsx)(f.a,{children:Object(r.jsx)(S.a,{className:"h-100 w-100",onClick:function(){return n(!1)},variant:"primary",children:"Dismiss"})})]})})]}),!i&&Object(r.jsx)(S.a,{onClick:function(){return n(!0)},children:"Show Alert"})]}):null};var y=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{id:"created-by","data-testid":"created-by",style:{fontSize:"1.5em"},children:Object(r.jsxs)("p",{children:["Created by"," ",Object(r.jsx)("a",{href:"https://github.com/OulipianSummer",target:"_blank",rel:"noreferrer",children:"Andrew Benbow"}),". UI design inspired by"," ",Object(r.jsx)("a",{href:"https://play2048.co/",target:"_blank",rel:"noreferrer",children:"2048"})," ","by"," ",Object(r.jsx)("a",{href:"https://twitter.com/gabrielecirulli?lang=en",target:"_blank",rel:"noreferrer",children:"Gabriele Cirulli"}),"."]})})})},q=s(35),k=s.n(q),C=s(34),w=s.n(C);function z(){var e=k()().width;return Object(r.jsx)(w.a,{className:"confetti",width:e,height:document.body.clientHeight})}s(52);var _=s(66),M=s(67),N=s(31),T=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.light?this.props.lightSquareColor:this.props.darkSquareColor;return Object(r.jsx)("rect",{fill:e,"data-testid":"chess_board_square",height:this.props.squareSize,width:this.props.squareSize,x:this.props.x,y:this.props.y})}}]),s}(i.Component);T.displayName="Square";var P=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(r.jsx)("rect",{x:this.props.x,y:this.props.y,width:this.props.squareSize,height:this.props.squareSize,stroke:this.props.highlightColor,fill:"none",strokeWidth:"3"})}}]),s}(i.Component);P.defaultProps={highlightColor:""};var D=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"_squareToCoords",value:function(e){return this.props.flip?[this.props.squareSize*(this.props.files-(e.toLowerCase().charCodeAt(0)-97)),(Number(e.slice(1))-1)*this.props.squareSize]:[this.props.squareSize*(1+e.toLowerCase().charCodeAt(0)-97),(this.props.ranks-Number(e.slice(1)))*this.props.squareSize]}},{key:"_fileRankToCoords",value:function(e,t){return this.props.flip?[this.props.squareSize*(this.props.files-e),this.props.squareSize*t]:[this.props.squareSize*(1+e),this.props.squareSize*(this.props.ranks-t-1)]}},{key:"_indexToSquare",value:function(e){return"abcdefghijklmno"[Math.floor(e/this.props.files)]+(e%this.props.files+1)}},{key:"shouldComponentUpdate",value:function(e){return e.selectedSquare!==this.props.selectedSquare||e.flip!==this.props.flip||e.squareSize!==this.props.squareSize||e.lightSquareColor!==this.props.lightSquareColor||e.darkSquareColor!==this.props.darkSquareColor||e.ranks!==this.props.ranks||e.files!==this.props.files}},{key:"render",value:function(){for(var e=this,t=[],s=0;s<this.props.files;s++)for(var i=0;i<this.props.ranks;i++){var a=this._fileRankToCoords(s,i),n=Object(v.a)(a,2),o=n[0],c=n[1];t.push({x:o,y:c,light:1&(s^i)})}return Object(r.jsxs)("svg",{children:[t.map((function(t,s){return Object(r.jsx)(T,{id:e._indexToSquare(s),square:e._indexToSquare(s),x:t.x,y:t.y,light:!!t.light,squareSize:e.props.squareSize,lightSquareColor:e.props.lightSquareColor,darkSquareColor:e.props.darkSquareColor},s)})),Object.keys(this.props.highlights).map((function(t){var s=e._squareToCoords(t),i=Object(v.a)(s,2),a=i[0],n=i[1];return Object(r.jsx)(P,{highlightColor:e.props.highlights[t],squareSize:e.props.squareSize,x:a,y:n},t)}))]})}}]),s}(i.Component);D.defaultProps={darkSquareColor:"#005EBB",files:8,flip:!1,highlights:{},lightSquareColor:"#2492FF",ranks:8,squareSize:45};var F=D,B=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"shouldComponentUpdate",value:function(e){return e.x!==this.props.x||e.y!==this.props.y||e.pieceType!==this.props.pieceType||e.squareSize!==this.props.squareSize}},{key:"render",value:function(){var e=this.props.squareSize/45,t="translate("+this.props.x+","+this.props.y+") scale("+e+")";return this.props.drawPiece(t)}}]),s}(a.a.Component),A={N:function(e){return Object(r.jsx)("svg",{children:Object(r.jsx)("g",{className:"g_4",transform:e,children:Object(r.jsx)("path",{transform:"scale(.08), translate(90, 20)",fill:"white",d:"M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"})})})},"-":function(e){return Object(r.jsx)("svg",{children:Object(r.jsx)("g",{transform:e,children:Object(r.jsx)("rect",{x:"0",y:"0",width:45,height:45,fill:"#2c3e50",fillOpacity:"0.8"})})})}},I=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={selectedSquare:null,selectedPieceType:null,dragX:0,dragY:0,isDragging:!1,left:0,top:0,width:0,height:0},r._onResize=r._onResize.bind(Object(h.a)(r)),r._onScroll=r._onScroll.bind(Object(h.a)(r)),r}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this._getClientPos(),window.addEventListener("resize",this._onResize),window.addEventListener("scroll",this._onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._onResize),window.removeEventListener("scroll",this._onScroll)}},{key:"componentDidUpdate",value:function(e){if(e.squareSize!==this.props.squareSize||e.ranks!==this.props.ranks||e.files!==this.props.files){var t=new Event("resize");dispatchEvent(t)}}},{key:"_onResize",value:function(){this._getClientPos()}},{key:"_onScroll",value:function(){this._getClientPos()}},{key:"_onMouseDown",value:function(e){e.preventDefault();var t=e.clientX-this.state.left,s=e.clientY-this.state.top;this._grab(t,s)}},{key:"_onTouchStart",value:function(e){e.preventDefault();var t=e.touches[0].clientX-this.state.left,s=e.touches[0].clientY-this.state.top;this._grab(t,s)}},{key:"_onMouseMove",value:function(e){e.preventDefault();var t=e.clientX-this.state.left,s=e.clientY-this.state.top;this._move(t,s)}},{key:"_onTouchMove",value:function(e){e.preventDefault();var t=e.touches[0].clientX-this.state.left,s=e.touches[0].clientY-this.state.top;this._move(t,s)}},{key:"_onMouseUp",value:function(e){e.preventDefault();var t=e.clientX-this.state.left,s=e.clientY-this.state.top;this._release(t,s)}},{key:"_onTouchEnd",value:function(e){e.preventDefault();var t=[this.state.dragX,this.state.dragY],s=t[0],r=t[1];this._release(s,r)}},{key:"_squareToCoords",value:function(e){return this.props.flip?[this.props.squareSize*(this.props.files-(e.toLowerCase().charCodeAt(0)-97)),(Number(e.slice(1))-1)*this.props.squareSize]:[this.props.squareSize*(1+e.toLowerCase().charCodeAt(0)-97),(this.props.ranks-Number(e.slice(1)))*this.props.squareSize]}},{key:"_fileRankToCoords",value:function(e,t){return this.props.flip?[this.props.squareSize*(this.props.files-e),this.props.squareSize*t]:[this.props.squareSize*(1+e),this.props.squareSize*(this.props.ranks-t-1)]}},{key:"_coordsToSquare",value:function(e,t){return this.props.flip?String.fromCharCode(97+this.props.files-e/this.props.squareSize+1)+(1+Math.floor(t/this.props.squareSize)):String.fromCharCode(97+e/this.props.squareSize-1)+(1+Math.floor((this.props.ranks*this.props.squareSize-t)/this.props.squareSize))}},{key:"_grab",value:function(e,t){var s=this.props.squareSize*(1+this.props.files),r=this.props.squareSize*this.props.ranks;if(e<this.props.squareSize||e>s||t<0||t>r)return!1;var i=this._coordsToSquare(e,t),a=this._getPieceAtSquare(i);this.state.selectedSquare&&this.state.selectedSquare!==i||this.setState({selectedSquare:i,selectedPieceType:a?a.pieceType:null,dragX:a?a.x+this.props.squareSize/2:this.state.dragX,dragY:a?a.y+this.props.squareSize/2:this.state.dragY,isDragging:!1}),this.props.onSelectSquare&&this.props.onSelectSquare(i)}},{key:"_move",value:function(e,t){this.state.isDragging&&this.setState({dragX:e,dragY:t})}},{key:"_release",value:function(e,t){this.setState({isDragging:!1});var s=this._coordsToSquare(e,t);s!==this.state.selectedSquare&&(this.props.onMovePiece&&this.props.onMovePiece(this.state.selectedPieceType,this.state.selectedSquare,s),this.setState({selectedSquare:null}))}},{key:"_getClientPos",value:function(){var e=this.Client.getBoundingClientRect();this.setState({left:e.left,top:e.top,width:e.width,height:e.height})}},{key:"_getPieces",value:function(){var e=this;return this.props.pieces?this.props.pieces.map((function(t){var s=t.split("@",2),r=Object(v.a)(s,2),i=r[0],a=r[1];if(!a)return{pieceType:"invalid",square:"none",x:0,y:0};var n=e._squareToCoords(a),o=Object(v.a)(n,2),c=o[0],l=o[1];return isNaN(l)?{pieceType:"invalid",square:"none",x:0,y:0}:{pieceType:i,square:a.toLowerCase(),x:c,y:l}})):[]}},{key:"_getPiecesFromFEN",value:function(){var e=this,t=this.props.fen.split(" ",6),s=Object.assign(A,this.props.pieceDefinitions),r=new RegExp("["+Object.keys(s).join("").replace("-","\\-")+"]");return t[0].replace(/(\d+|\w|\/)(?!$)/g,"$1,").split(",").reduce((function(t,s){if(r.test(s)){var i=e._fileRankToCoords(t.file,t.rank),a=Object(v.a)(i,2),n=a[0],o=a[1],c=String.fromCharCode(97+t.file)+(t.rank+1).toString();t.pieces.push({pieceType:s,square:c,x:n,y:o}),t.file++}else"/"===s?(t.rank-=1,t.file=0):Number.isInteger(parseInt(s))&&(t.file+=Number(s));return t}),{rank:this.props.ranks-1,file:0,pieces:[]}).pieces}},{key:"_getPieceAtSquare",value:function(e){return(this.props.fen?this._getPiecesFromFEN():this._getPieces()).filter((function(t){return t.square===e}))[0]}},{key:"render",value:function(){var e=this,t=this.props.fen?this._getPiecesFromFEN():this._getPieces(),s=Object.assign(A,this.props.pieceDefinitions),i={};return this.state.selectedSquare&&(i[this.state.selectedSquare]=""),Object(r.jsxs)("svg",{ref:function(t){e.Client=t},style:{display:"inline-block",marginBottom:"-15%"},height:"auto"===this.props.height?(2+this.props.ranks)*this.props.squareSize:this.props.height,onMouseDown:this._onMouseDown.bind(this),onMouseMove:this._onMouseMove.bind(this),onTouchEnd:this._onTouchEnd.bind(this),onTouchMove:this._onTouchMove.bind(this),onTouchStart:this._onTouchStart.bind(this),onMouseUp:this._onMouseUp.bind(this),width:"auto"===this.props.width?(2+this.props.files)*this.props.squareSize:this.props.width,children:[Object(r.jsx)(F,{darkSquareColor:this.props.darkSquareColor,files:this.props.files,flip:!!this.props.flip,highlights:i,lightSquareColor:this.props.lightSquareColor,ranks:this.props.ranks,selectedSquare:this.state.selectedSquare,squareSize:this.props.squareSize}),t.map((function(t,i){return Object(r.jsx)(B,{x:e.state.isDragging&&t.square===e.state.selectedSquare?e.state.dragX-e.props.squareSize/2:t.x,y:e.state.isDragging&&t.square===e.state.selectedSquare?e.state.dragY-e.props.squareSize/2:t.y,pieceType:t.pieceType,squareSize:e.props.squareSize,drawPiece:s[t.pieceType]},i)}))]})}}]),s}(i.Component);I.defaultProps={allowedMoves:{},darkSquareColor:"#005EBB",height:"auto",files:8,flip:!1,lightSquareColor:"#2492FF",pieceDefinitions:{},ranks:8,squareSize:45,width:"auto"};var E=I,U=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(e){var r;Object(c.a)(this,s),r=t.call(this,e);var i=e.fen?Array.isArray(e.fen)?e.fen:[e.fen]:e.pgn?e.getFensFromPgn(e.pgn):[""],a=e.pgn?r.startMove:0;return r.state={currentMove:a,moves:i},r}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(e){e.fen&&e.fen!==this.props.fen&&this.setState({currentMove:0,moves:[e.fen]}),e.pgn&&e.pgn!==this.props.pgn&&this.setState({currentMove:this.startMove,moves:e.getFensFromPgn(e.pgn)})}},{key:"_onMovePiece",value:function(e,t,s){this.props.allowMoves&&this.props.onMovePiece&&this.props.onMovePiece(e,t,s)}},{key:"_onMovePgnHead",value:function(e){this.setState({currentMove:e})}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(E,Object(N.a)(Object(N.a)({},this.props),{},{fen:this.state.moves[this.state.currentMove],style:{display:"inline-block"},onMovePiece:this._onMovePiece.bind(this)}))})}},{key:"startMove",get:function(){return"number"===typeof this.props.startMove||parseInt(this.props.startMove)?parseInt(this.props.startMove):2*(parseInt(this.props.startMove.slice(1))-1)+("w"===this.props.startMove[0]?1:2)}}]),s}(i.Component);U.defaultProps={allowMoves:!0,darkSquareColor:"#005EBB",height:"auto",files:8,flip:!1,lightSquareColor:"#2492FF",newlineChar:"\r?\n",pieceDefinitions:{},pgnHeight:400,ranks:8,startMove:0,squareSize:45,width:"auto"};var L=U,R=s(36),H=s(25),Y=s(26),X=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={order:8,diagramDimensions:{width:-1},seqNumber:0,tourSeq:[],legalSquares:[],gameOver:!1,helpAltBackground:!1,currentScore:0},r.handleClear=r.handleClear.bind(Object(h.a)(r)),r.handleMove=r.handleMove.bind(Object(h.a)(r)),r.handleHowTo=r.handleHowTo.bind(Object(h.a)(r)),r.handleUpdate=r.handleUpdate.bind(Object(h.a)(r)),r}return Object(l.a)(s,[{key:"handleMove",value:function(e){var t=this.state,s=t.tourSeq,r=t.legalSquares,i=t.gameOver;if(0===s.length){var a=this.checkLegalMove(e,s);return console.log(r),this.setState({legalSquares:a}),this.placeKnight(e)}if(!i&&r.includes(e)){var n=this.checkLegalMove(e,s);return console.log(r,e),this.setState({legalSquares:n}),this.placeKnight(e)}}},{key:"handleHowTo",value:function(){var e=this;return document.querySelector("#how-to").scrollIntoView(),this.setState((function(e){return{helpAltBackground:!e.helpAltBackground}})),setTimeout((function(){e.setState((function(e){return{helpAltBackground:!e.helpAltBackground}}))}),5e3)}},{key:"checkLegalMove",value:function(e,t){var s=this.state,r=s.order,i=s.seqNumber;if(t.includes(e))return[];var a=["a","b","c","d","e","f","g","h","i","j"],n=a.indexOf(e[0])+1,o=parseInt(e.split(/(\d{1,})/)[1]),c=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].map((function(e){var s=e[0]+n,i=e[1]+o,c="".concat(a[s-1]).concat(i);return s>0&&s<=r&&i>0&&i<=r&&!1===t.includes(c)?c:null})).filter((function(e){return null!==e}));return 0===c.length&&i<r*r?(this.gameOver(),[]):c}},{key:"gameOver",value:function(){return this.setState({gameOver:!0})}},{key:"placeKnight",value:function(e){var t=this.state.tourSeq.slice();return t.push(e),this.setState((function(e){return{tourSeq:t,seqNumber:e.seqNumber+=1,currentScore:e.currentScore+=1}}))}},{key:"handleClear",value:function(){return this.setState({tourSeq:[],seqNumber:0,currentScore:0,legalSquares:[],gameOver:!1})}},{key:"handleUpdate",value:function(e){this.handleClear();var t=e.target.attributes["data-order"].value;return this.setState({order:t})}},{key:"render",value:function(){var e=this,t=this.state,s=t.order,i=t.diagramDimensions,n=t.seqNumber,o=t.tourSeq,c=t.gameOver,l=t.currentScore,h=o[n-1],u=o.map((function(e){return"-@"+e}));return h&&u.push("N@"+h),Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)(O.a,{children:Object(r.jsxs)(f.a,{col:12,children:[n===Math.pow(s,2)&&Object(r.jsx)(z,{}),Object(r.jsx)("header",{id:"rudrata-header",children:Object(r.jsx)(d.a,{fluid:!0,className:"d-flex justify-content-around mb-5",children:Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(f.a,{className:"mr-5",children:[Object(r.jsx)("h1",{className:"display-2 text-center",children:"Rudrata"}),Object(r.jsx)("p",{className:"text-center",children:"Visit each square on the chess board!"}),Object(r.jsxs)("button",{className:" font-weight-bold btn-link btn mb-2 mt-2",onClick:this.handleHowTo,children:["How To Play ",Object(r.jsx)(H.a,{icon:Y.a})]})]}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(g,{currentScore:l,order:s})}),Object(r.jsxs)(_.a,{className:"d-flex col-12 flex-column justify-content-around",children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(S.a,{size:"lg",className:"mt-3 btn-block",variant:"success",onClick:this.handleClear,children:"New Game"})}),Object(r.jsx)(O.a,{children:Object(r.jsxs)(M.a,{block:"true",className:"mt-3 btn-block w-100",children:[Object(r.jsx)(M.a.Toggle,{block:"true",size:"lg",variant:"success",children:"Chess Board Size"}),Object(r.jsxs)(M.a.Menu,{children:[Object(r.jsx)(M.a.Item,{"data-order":5,className:"text-success difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:"5x5 (easy)"}),Object(r.jsxs)(M.a.Item,{"data-order":6,className:"text-success difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:["6x6"," "]}),Object(r.jsx)(M.a.Divider,{}),Object(r.jsx)(M.a.Item,{"data-order":7,className:"text-warning difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:"7x7 (intermediate)"}),Object(r.jsx)(M.a.Item,{"data-order":8,className:"text-warning difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:"8x8 (default)"}),Object(r.jsx)(M.a.Divider,{}),Object(r.jsx)(M.a.Item,{"data-order":9,className:"text-danger difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:"9x9 (difficult)"}),Object(r.jsxs)(M.a.Item,{"data-order":10,className:"text-danger difficulty-dd",onClick:function(t){e.handleUpdate(t)},children:["10x10"," "]})]})]})})]})]})]})})}),Object(r.jsx)("section",{id:"chessboard",children:Object(r.jsx)(R.a,{bounds:!0,onResize:function(t){e.setState({diagramDimensions:t.bounds})},children:function(t){var a=t.measureRef;return Object(r.jsxs)("div",{ref:a,className:"d-flex justify-content-center",children:[!0===c&&Object(r.jsx)(x,{score:"".concat(n," / ").concat(s*s),newGame:e.handleClear}),Object(r.jsx)(L,{allowMoves:!1,squareSize:a?Math.min(80,1*i.width/s):45,files:parseInt(s),ranks:parseInt(s),pieces:u,onSelectSquare:function(t){return e.handleMove(t)},lightSquareColor:"#F0EBD8",darkSquareColor:"#A38D7B"})]})}})}),Object(r.jsx)("br",{}),Object(r.jsx)("section",{id:"how-to-section",children:Object(r.jsx)(j,{altBackground:this.state.helpAltBackground})}),Object(r.jsx)("hr",{className:"w-50"}),Object(r.jsx)("section",{id:"created-by-section",children:Object(r.jsx)(y,{})}),Object(r.jsx)("section",{id:"button-section",className:"d-flex flex-row justify-content-center",children:Object(r.jsxs)(_.a,{role:"navigation",children:[Object(r.jsxs)("a",{className:"btn btn-primary btn-lg mr-1",href:"https://www.paypal.com/donate?hosted_button_id=3972H6RJEYDVW",target:"_blank",rel:"noreferrer",children:[Object(r.jsx)(H.a,{className:"mr-2",icon:Y.c}),"Donate"]}),Object(r.jsxs)("a",{className:"btn btn-primary btn-lg ml-1",href:"https://github.com/OulipianSummer/rudrata",target:"_blank",rel:"noreferrer",children:[Object(r.jsx)(H.a,{icon:Y.b})," View On GitHub"]})]})}),Object(r.jsx)("hr",{className:"w-50"}),Object(r.jsx)("section",{id:"tos",className:"d-flex flex-row justify-content-center",children:Object(r.jsxs)("p",{children:["Rudrata does not store or process any personal data, period. It simply does not have the capability to track you or store your personal data. But, for important legal reasons, this website still needs a"," ",Object(r.jsx)("a",{href:"https://www.termsfeed.com/live/86855bbe-e5f0-4b57-a4a4-8319222cfcb6",target:"_blank",rel:"noreferrer",children:"Privacy Policy"}),"."]})})]})})})}}]),s}(i.PureComponent),G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),r(e),i(e),a(e),n(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root")),G()}},[[57,1,2]]]);
//# sourceMappingURL=main.62c7f625.chunk.js.map