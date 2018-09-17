function takeANumber (currentLineOfPeople, newPersonName) {
  currentLineOfPeople.push(newPersonName);
  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + currentLineOfPeople.length + "in line.";
  return welcomeMessage;
}

function nowServing (currentLineOfPeople) {
  if (currentLineOfPeople.length > 0) {
    currentLineOfPeople.pop();
  return currentLineOfPeople;
}

