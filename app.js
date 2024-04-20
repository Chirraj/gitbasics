// remove duplicates

const duplicates = (arr) => {
    const flattenedArr = arr.reduce((prev, curr) => {
      for (let i = 0; i < curr.length; i++) {
        const val = curr[i];
        if (prev.indexOf(val) === -1 ) {
          prev.push(val);
        }
      }
      return prev;
    }, []);
    return flattenedArr;
  };
  
function main(){
  duplicates();   
  console.log("Main");
}

function main1(){
    console.log("Main 1");
}
  console.log(duplicates([[1, 2, 3, 5], [3, 2, 1, 5], [97.87]]));
  