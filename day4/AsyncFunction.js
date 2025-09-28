

function delay(ms)
{
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, ms))
}

const getData = async ()=> 
    {
        console.log("Line 1");

        console.log("Line 2");

        console.log("Line 3");
       await delay(3000)
        console.log("Line 4 called after 3 seconds");
        
    }


    getData()