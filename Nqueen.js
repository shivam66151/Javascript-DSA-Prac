//Algo
// 1) Start in the leftmost column
// 2) If all queens are placed
//     return true
// 3) Try all rows in the current column. 
//    Do following for every tried row.
//     a) If the queen can be placed safely in this row 
//        then mark this [row, column] as part of the 
//        solution and recursively check if placing
//        queen here leads to a solution.
//     b) If placing the queen in [row, column] leads to
//        a solution then return true.
//     c) If placing queen doesn't lead to a solution then
//        unmark this [row, column] (Backtrack) and go to 
//        step (a) to try other rows.
// 4) If all rows have been tried and nothing worked,
//    return false to trigger backtracking.

const N = 4

function printSolution(board)
{
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < N; j++)
        {
            document.write(board[i][j], " ")
        }
        document.write("</br>")
    }
}

// A utility function to check if a queen can
// be placed on board[row][col]. Note that this
// function is called when "col" queens are
// already placed in columns from 0 to col -1.
// So we need to check only left side for
// attacking queens
function isSafe(board, row, col)
{
 
    // Check this row on left side
    for(let i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false 
    }
 
    // Check upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false
 
    // Check lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
        if (board[i][j])
            return false
 
    return true
}

function solveNQUtil(board, col){
     
    // base case: If all queens are placed
    // then return true
    if(col >= N)
        return true
 
    // Consider this column and try placing
    // this queen in all rows one by one
    for(let i=0;i<N;i++){
 
        if(isSafe(board, i, col)==true){
             
            // Place this queen in board[i][col]
            board[i][col] = 1
 
            // recur to place rest of the queens
            if(solveNQUtil(board, col + 1) == true)
                return true
 
            // If placing queen in board[i][col
            // doesn't lead to a solution, then
            // queen from board[i][col]
            board[i][col] = 0
        }
    }
    // if the queen can not be placed in any row in
    // this column col then return false
    return false
}
 
// This function solves the N Queen problem using
// Backtracking. It mainly uses solveNQUtil() to
// solve the problem. It returns false if queens
// cannot be placed, otherwise return true and
// placement of queens in the form of 1s.
// note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.
function solveNQ(){
    let board = [ [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0] ]
 
    if(solveNQUtil(board, 0) == false){
        document.write("Solution does not exist")
        return false
    }
 
    printSolution(board)
    return true
}
 
// Driver Code
solveNQ()