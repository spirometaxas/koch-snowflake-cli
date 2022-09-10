const sierpinski = require('sierpinski-hexagon-cli');

const getWidth = function(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 5;
  }
  return 3 * getWidth(n - 1) + 2;
}

const getHeight = function(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 4;
  }
  return 3 * getHeight(n - 1);
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const createMaskBoard = function(w, h, character) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      if (character) {
        row.push(character);
      } else {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            row.push('▼');
          } else {
            row.push('▲');
          }
        } else {
          if (j % 2 === 0) {
            row.push('▲');
          } else {
            row.push('▼');
          }
        }
      }
    }
    board.push(row);
  }
  return board;
}

const drawTriangle = function(board, pos, size, character) {
  var curW = getWidth(size);
  var startX = pos.x - parseInt(curW / 2.0);
  var curY = pos.y;
  for (let i = 0; i < getHeight(size); i++) {
    for (let j = 0; j < curW; j++) {
      if (character) {
        board[curY][startX + j] = character;
      } else {
        if (j % 2 === 0) {
          board[curY][startX + j] = '▲';
        } else {
          board[curY][startX + j] = '▼';
        }
      }
    }
    curW -= 2;
    startX += 1;
    curY += 1;
  }
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const hexagonToBoard = function(data) {
  const parts = data.split('\n').filter(p => p.length > 1);
  let board = [];
  for (let i = 0; i < parts.length; i++) {
    let row = [];
    for (let j = 1; j < parts[i].length; j++) {
      row.push(parts[i].charAt(j));
    }
    board.push(row);
  }
  return board;
}

const isRowEmpty = function(row) {
  for (let i = 0; i < row.length; i++) {
    if (row[i] !== ' ') {
      return false;
    }
  }
  return true;
}

const getLeftBuffer = function(board) {
  let buffer = Number. MAX_VALUE;
  for (let i = 0; i < board.length; i++) {
    let currentBuffer = 0;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ' ') {
        currentBuffer++;
      } else {
        break;
      }
    }
    if (currentBuffer < buffer) {
      buffer = currentBuffer;
    }
  }
  return buffer;
}

const getRightBuffer = function(board) {
  let buffer = Number. MAX_VALUE;
  for (let i = 0; i < board.length; i++) {
    let currentBuffer = 0;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][board[i].length - j - 1] === ' ') {
        currentBuffer++;
      } else {
        break;
      }
    }
    if (currentBuffer < buffer) {
      buffer = currentBuffer;
    }
  }
  return buffer;
}

const trimBoard = function(board, size) {
  const targetHeight = getHeight(size);
  const bufferH = board.length - targetHeight;

  const targetWidth = getWidth(size);
  const bufferW = board[0].length - targetWidth;

  // Trim Top
  for (let i = 0; i < parseInt(bufferH / 2); i++) {
    board.shift();
  }

  // Trim Bottom
  for (let i = 0; i < parseInt(bufferH / 2); i++) {
    board.pop();
  }

  // Trim Left
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i].slice(parseInt(bufferW / 2.0));
  }

  // Trim Right
  for (let i = 0; i < board.length; i++) {
    board[i].splice(board[i].length - parseInt(bufferW / 2.0));
  }
}

const isInside = function(point, hexagonBoard) {
  if (point.x < 0 || point.x >= hexagonBoard[0].length) {
    return false;
  }

  if (point.y < 0 || point.y >= hexagonBoard.length) {
    return false;
  }

  return true;
}

const isValidPoint = function(newPoint, hexagonBoard, snowflakeMaskBoard) {
  if (!isInside(newPoint, hexagonBoard)) {
    return false;
  }

  if (!(snowflakeMaskBoard[newPoint.y][newPoint.x] === ' ' && hexagonBoard[newPoint.y][newPoint.x] === ' ')) {
    return false;
  }

  return true;
}

const isFilledPoint = function(newPoint, hexagonBoard) {
  if (!isInside(newPoint, hexagonBoard)) {
    return false;
  }

  return hexagonBoard[newPoint.y][newPoint.x] !== ' ';
}

const queueContains = function(queue, point) {
  return queue.filter(p => p.x === point.x && p.y === point.y).length > 0;
}

const findSnowflake = function(hexagonBoard, snowflakeMaskBoard) {
  let queue = [ { x: parseInt(hexagonBoard[0].length / 2.0), y: hexagonBoard.length / 2 } ];

  while (queue.length > 0) {
    const currentPos = queue.shift();
    if (currentPos) {
      snowflakeMaskBoard[currentPos.y][currentPos.x] = '*';

      // Left
      const left = { x: currentPos.x - 1, y: currentPos.y };
      if (isValidPoint(left, hexagonBoard, snowflakeMaskBoard) && !queueContains(queue, left)) {
        queue.push(left);
      }

      // Right
      const right = { x: currentPos.x + 1, y: currentPos.y };
      if (isValidPoint(right, hexagonBoard, snowflakeMaskBoard) && !queueContains(queue, right)) {
        queue.push(right);
      }

      if (isFilledPoint(left, hexagonBoard) && isFilledPoint(right, hexagonBoard)) {
        continue;  // Don't continue up or down
      }

      // Top
      const top = { x: currentPos.x, y: currentPos.y + 1 };
      if (isValidPoint(top, hexagonBoard, snowflakeMaskBoard) && !queueContains(queue, top)) {
        queue.push(top);
      }

      // Bottom
      const bottom = { x: currentPos.x, y: currentPos.y - 1 };
      if (isValidPoint(bottom, hexagonBoard, snowflakeMaskBoard) && !queueContains(queue, bottom)) {
        queue.push(bottom);
      }
    }
  }
}

const applyMask = function(snowflakeMaskBoard, maskBoard) {
  for (let i = 0; i < snowflakeMaskBoard.length; i++) {
    for (let j = 0; j < snowflakeMaskBoard[i].length; j++) {
      if (snowflakeMaskBoard[i][j] === '*') {
        snowflakeMaskBoard[i][j] = maskBoard[i][j];
      }
    }
  }
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  if (n === 0) {
    const triangleBoard = createBoard(getWidth(size), getHeight(size));
    drawTriangle(triangleBoard, { x: parseInt(getWidth(size) / 2.0), y: parseInt(getHeight(size) / 4.0) }, size, character);
    return draw(triangleBoard);
  } else {
    const hexagon = sierpinski.create(n, { size: size });
    const hexagonBoard = hexagonToBoard(hexagon);
    const snowflakeMaskBoard = createBoard(hexagonBoard[0].length, hexagonBoard.length);
    findSnowflake(hexagonBoard, snowflakeMaskBoard);
    trimBoard(snowflakeMaskBoard, size);
    const maskBoard = createMaskBoard(snowflakeMaskBoard[0].length, snowflakeMaskBoard.length, character);
    applyMask(snowflakeMaskBoard, maskBoard);
    return draw(snowflakeMaskBoard);
  }

}

module.exports = {
  create: create
};