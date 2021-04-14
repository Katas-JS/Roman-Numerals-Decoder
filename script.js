function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  ;

    let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400,
    CM:900
    } // obj
      
let totalVal=0;

    for (i=0; i<roman.length; i++){
         char1= roman.charAt(i);
         char2= roman.charAt(i+1);
         charAdd=char1+char2;
         romanVal=obj[charAdd]
       
      if (romanVal>0) {  i++;  totalVal=totalVal+romanVal}
      else {totalVal=totalVal+obj[char1]}
        
    } // loop i
  return totalVal;
}
