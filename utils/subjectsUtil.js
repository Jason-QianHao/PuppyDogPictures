function processSubjects(subjects){
  /*
  	"url": "https://anapioficeandfire.com/api/characters/1",
    "name": "",
    "gender": "Female",
    "culture": "Braavosi",
    "born": "",
    "died": "",
    "titles": [""],
    "aliases": ["The Daughter of the Dusk"],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": ["https://anapioficeandfire.com/api/books/5"],
    "povBooks": [],
    "tvSeries": [""],
    "playedBy": [""]
  */
  subjects.forEach(function(item,index){
      var gender = item.gender; 
      var culture = item.culture;
      var aliases = item.aliases;
      var books = item.books[0];
  });
}

module.exports = {
  processSubjects: processSubjects
}
