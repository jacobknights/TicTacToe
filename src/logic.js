//Function to calculate winner
export function calculateWinner(squares) {
    //Array with all possible win states
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      //Loop through array and look for above win states
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
      //If win state match found return the winning symbol or if not null
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }