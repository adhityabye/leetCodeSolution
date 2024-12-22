class Solution {
  List<int> asteroidCollision(List<int> asteroids) {
    List<int> stack = [];

    for(int a in asteroids){
        bool destroyed = false;
        while(stack.isNotEmpty && stack.last > 0 && a < 0 && !destroyed){
            if(stack.last.abs () == a.abs()){
                stack.removeLast();
                destroyed = true;
            }
            else if(stack.last.abs() > a.abs()){
                destroyed = true;
            }
            else{
                stack.removeLast();
            }
        }
        if(!destroyed){
            stack.add(a);    
        }
    }
    return stack;
  }
}