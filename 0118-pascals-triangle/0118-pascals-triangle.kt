class Solution {
    fun generate(numRows: Int): List<List<Int>> {
        //initialize mutable list
        val triangle = mutableListOf<List<Int>>()
        
        //iterate through numRows
        for(i in 0 until numRows){
            val row = mutableListOf<Int>()

            //add (1) for each first element of row
            row.add(1)

            //add from previous row
            for(j in 1 until i){
                row.add(triangle[i-1][j-1] + triangle[i-1][j])
            }

            //after the first row, we'll always add (1) to the last elements to avoid redundant
            if(i > 0){
                row.add(1)
            }

            triangle.add(row)
        }
        return triangle
    }
}