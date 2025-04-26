let postCounter = 1;
class postModel {
  constructor(title, author, content) {
    this.id = postCounter++;
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = Date.now();
  }
}
module.exports = postModel;
