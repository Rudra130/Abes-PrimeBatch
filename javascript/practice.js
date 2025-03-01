// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const getMetaData=()=> {
    const name = prompt("Please enter your name\n");
    console.log("Hello", name);
    const numOfSubText = prompt("Enter the number of subjects\n");
    const numOfSubjects = parseInt(numOfSubText);
    return numOfSubjects;
};

const getSubject = (num) => {
    const record = {};
    for (let i = 0;i<num;i++)
    {
        const subName = prompt("Please enter the name of the subject \n");
        const marks = prompt("Please enter the marks for subject \n");
        record[subName]=marks;
    }
    console.log(record)
    return record;
}

const getPercentage = (record,num) => {
    let total = 0;
    for (let key in record)
    {
        
        total+=parseInt(record[key]);
    }
    console.log(total)
    return total/num;
}

const getHighestScoringSubject = (record)=>{
     max =Number.MIN_VALUE;
    res={}
    name=null
    
    for(let key in record){
        if(parseInt(record[key])>max){
            max=parseInt(record[key])
            name = key;
        }
    }
    res[name]=max;
    return res;
}

const num = getMetaData();
const record = getSubject(num);

const percentage = getPercentage(record,num);
console.log(percentage);

const highestMark = getHighestScoringSubject(record);

console.log(highestMark)