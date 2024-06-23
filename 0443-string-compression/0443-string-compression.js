/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIndex = 0
    let i = 0
    
    while(i < chars.length){
      let j =  i
      
      while(j < chars.length && chars[j] === chars[i]){
        j++
      }
      
      chars[writeIndex] = chars[i]
      writeIndex++
      
      let count = j - i
      
      if(count > 1){
        let countStr = count.toString()
        for(let k =0; k < countStr.length; k++){
          chars[writeIndex] = countStr[k];
          writeIndex++
        }
        
      }
      i = j; 
    }
  return writeIndex
  
  
};