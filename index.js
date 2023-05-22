function scuberGreetingForFeet(distance){
  // Write your code here!
  let returnString = '';
  if (distance <= 400){
    returnString = 'This one is on me!';
  }
  else if (distance <= 2000){
    returnString = 'That will be twenty bucks.';
  }
  else if (distance <= 2500){
    returnString = 'I will gladly take your thirty bucks.';
  }
  else returnString = 'No can do.';
  return returnString;
}

function ternaryCheckCity(city){
  // Write your code here!
  let returnString = '';
  city === 'NYC' ? (returnString = 'Ok, sounds good.') : (returnString = 'No go.');
  return returnString;
}

function switchOnCharmFromTip(tipDescriptor){
  // Write your code here!
  let returnString = '';
  switch (tipDescriptor) {
    case 'generous':
      returnString = 'Thank you so much.';
      break;
    case 'not as generous':
      returnString = 'Thank you.';
      break;
    default:
      returnString = 'Bye.'
      break;
  }
  return returnString;
}