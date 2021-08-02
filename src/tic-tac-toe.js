class TicTacToe {
  currentSymbol = 'x';
  field = [
    [null, null, null],
    [null, null, null],
    [null, null, null] 
  ]
  step = 0;

  changeSymbol = {
    x: 'o',
    o: 'x',
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, colIndex) {
    if(this.field[rowIndex][colIndex] !== null) return;

    this.setFieldValue(rowIndex, colIndex);
    this.upFieldFill();
    this.changeCurrentSymbol(); 
  }

  isFinished() {
    if(this.getWinner() || this.noMoreTurns()) return true;
    return false;
  }

  getWinner() {
    const checkRows = () => {
      let result = null;
      for(let i = 0; i < this.field.length; i++) {
        const[x, y, z] = this.field[i];
        if(x && x === y && x === z) {
          result = x;
        }
      }
      return result;
    }
      
    const checkColumns = () => {
      let result = null;  
      for(let i = 0; i < this.field[0].length; i++) {
        const arr = [];
        for(let j = 0; j < this.field.length; j++) {
          arr.push(this.field[j][i])
        }
        const[x, y, z] = arr;
        if(x && x === y && x === z) {
          result = x;
        }
      }
      return result;
    }

    const checkDiag = () => {
      let result = null;
      const arr = [];
      for(let i = 0; i < this.field.length; i++) {
        arr.push(this.field[i][i])
      }
      const[x, y, z] = arr;
      if(x && x === y && x === z) {
        result = x;
      }
      return result;
    }
       
    const checkSubDiag = () => {
      let result = null;
      const arr = [];
      for(let i = 0; i < this.field.length; i++) {
        arr.push(this.field[i][this.field.length-1 - i])
      }
      const[x, y, z] = arr;
      if(x && x === y && x === z) {
        result = x;
      }
      return result;
    }

    return checkRows() || checkColumns() || checkDiag() || checkSubDiag();
  }

  noMoreTurns() {
    return this.step >= this.field.length * this.field[0].length;
  }

  isDraw() {
    if(this.getWinner() || !this.noMoreTurns()) return false;
    return true;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }

  setFieldValue(rowIndex, colIndex) {
    this.field[rowIndex][colIndex] = this.currentSymbol;
  }

  changeCurrentSymbol() {
    this.currentSymbol = this.changeSymbol[this.currentSymbol];
  }

  upFieldFill() {
    this.step++;
  }
}

module.exports = TicTacToe;