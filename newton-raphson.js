/* Define the function we want to find the roots of */
const f = (x) => Math.pow(x, 3) - 2 * Math.pow(x, 2) + 1;

/* Define the derivative of the function */
const df = (x) => 3 * Math.pow(x, 2) - 4 * x;

/* Define the Newton-Raphson method function */
function newtonRaphson(x0, tol) {
  let xn = x0;  // Initial guess
  let fxn = f(xn);  // Function value at initial guess

  // Iterate until the approximation converges to desired tolerance level
  while (Math.abs(fxn) > tol) {
    let dfxn = df(xn);  // Derivative value at current approximation
    xn = xn - fxn / dfxn;  // Apply Newton-Raphson formula
    fxn = f(xn);  // Function value at new approximation
  }

  return xn;
}

// Test the Newton-Raphson method with an initial guess of 1 and tolerance of 0.0001
console.log("Root approximation: ", newtonRaphson(1, 0.0001));
