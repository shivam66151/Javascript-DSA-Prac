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