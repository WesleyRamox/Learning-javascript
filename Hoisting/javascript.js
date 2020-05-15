// Hoisting
function hoisting()
{
    let a = 2;
    let b = 3;

    function inside(n1, n2)
    {
        let result = n1 + n2;
        alert(`Value: ${result}`);
    }

    return inside(a, b);
}

hoisting();