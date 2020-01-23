window.onload = function () { //метод в момент загузки сайта главного объекта мы выполним функцию

    let board = document.createElement("div");
    board.className = "board";
    document.body.appendChild(board);

    // board.appendChild();
    // .row*>.square*8

    let n = 8;

    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                let square = document.createElement("div");
                square.className = "square";
                if (j % 2 === 0) {
                    square.className += " white";
                } else {
                    square.className += " black";
                }
                row.appendChild(square);
            }
        }
         else {
            for (let j = 0; j < n; j++) {
                let square = document.createElement("div");
                square.className = "square";
                if (j % 2 === 0) {
                    square.className += " black";
                } else {
                    square.className += " white";
                }
                row.appendChild(square);
            }
        }
    }

}; //код работает если сайт полностью загружен
