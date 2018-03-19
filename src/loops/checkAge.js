export function checkAge(age){
  (age > 18) ? return true : return confirm('Родители разрешили?');
}

export function checkAge(age){
  return(age > 18) || return confirm('Родители разрешили?');
}
