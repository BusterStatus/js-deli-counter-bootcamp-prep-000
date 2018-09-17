function takeANumber (currentLineOfPeople, newPersonName) {
  currentLineOfPeople.push(newPersonName);
  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + currentLineOfPeople.length + " in line.";
  return welcomeMessage;
}

function nowServing (currentLineOfPeople) {
  if (currentLineOfPeople.length > 0) {
    return "Currently serving " + currentLineOfPeople.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (currentLineOfPeople) {
  var message;
  for (i = 0; i < currentLineOfPeople.length; i++) {
    if (currentLineOfPeople > 0) {
    message = "The line is currently: ";
    var person = (i+1) + ". " + currentLineOfPeople[i];
    message = message + person;
    } else {
      message = "The line is currently empty.";
    }
  }
  return message;
}