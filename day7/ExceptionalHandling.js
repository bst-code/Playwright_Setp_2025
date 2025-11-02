
// Exceptional handling - Run Time error - try catch finally 

try
{
    let i = 10
    let j = 20

if(i > 0 && j >0)
{
    const multiply = i*j;
    console.log(multiply);
}else
    {
        throw new Error();
    }
}

catch(error)
{
    console.log("Please enter data > 0");
    
}

finally
{
    console.log("Finally will run always");
    
}