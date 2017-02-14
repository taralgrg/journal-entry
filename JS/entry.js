function Entry(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body;
}

Entry.prototype.words = function(bodyEntry) {
  return bodyEntry.split(" ").length;
}

Entry.prototype.vowels = function(bodyEntry) {
  bodyEntry = bodyEntry.toLowerCase();
  var vowelsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "a" || bodyEntry.charAt(i) == "e" || bodyEntry.charAt(i) == "i" || bodyEntry.charAt(i) == "o" || bodyEntry.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

Entry.prototype.consonants = function(bodyEntry) {
  bodyEntry = bodyEntry.toLowerCase();
  var consonantsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "a" || bodyEntry.charAt(i) == "e" || bodyEntry.charAt(i) == "i" || bodyEntry.charAt(i) == "o" || bodyEntry.charAt(i) == "u") {
      consonantsCount += 0;
    } else {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
}

// exports.entryModule = Entry;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var titleEntry = $('#title-entry').val();
    var bodyEntry = $('#body-entry').val();
    var newEntry = new Entry(titleEntry, bodyEntry);
    var words = newEntry.words(bodyEntry);
    var vowels = newEntry.vowels(bodyEntry);
    var consonants = newEntry.consonants(bodyEntry);
    $('#number-words').text(words);
    $('#number-vowels').text(vowels);
    $('#number-consonants').text(consonants);
  });
});
