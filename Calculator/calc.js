let display = document.getElementById("result");

function append(value) 
{
    display.value += value; // display.value = display.value + value
}

function clearResult() 
{
    display.value = ""; // clear the display
}

function deleteChar() 
{
    display.value = display.value.slice(0, -1); // remove last character
}

function calculate() 
{
    try 
    {
        display.value = eval(display.value);
    } catch (error) 
    {
        display.value = "Error";
    }
}
