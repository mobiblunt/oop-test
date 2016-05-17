function NotesApplication(author,content) {
    this.author = author;
    this.content = content;
	var notes = [];

NotesApplication.prototype.create = function(note_content){
for(var i = 0; i < this.content.length; i++) {
	notes.push(i)
}
	}
NotesApplication.protoype.listNotes = function(){
for(var i = 0; i < notes.length; i++){
return "Note ID:" + notes[i].findIndex(i) + "By Author" + this.author

}}
NotesApplication.prototype.get = function(note_id){
	return notes[note_id].toString
}
NotesApplication.prototype.search = function(search_text){
	for(var i = 0; i < notes.length; i++){
	if(notes[i].contains(search_text) === True){
     return "Showing results for search" + search_text + "Note ID" + notes[i] + "By Author" + this.author
	} }
}
NotesApplication.prototype.delete = function(note_id){
	notes.splice(note_id,1);
}
NotesApplication.prototype.edit = function(note_id, new_content){
	notes.splice(note_id,1,new_content)
}
}

