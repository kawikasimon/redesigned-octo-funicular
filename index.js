
for ( var i = 300; i >= 0; i-- )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    document.write('FizzBuzz');
  }
  else if ( i%3 === 0 ) 
  {
    document.write('Fizz');
  }
  else if ( i%5 === 0 ) 
  {
    document.write('Buzz');
  }
  else
  {
    document.write(i);
  }
}