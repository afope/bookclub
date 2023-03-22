
app.post('/api/books/add/:id', [authJwt.verifyToken], controller.addBook)

app.get('/api/books/getBookImage', [authJwt.verifyToken], controller.getBookImage)

app.get('/api/books/:id', [authJwt.verifyToken], controller.getBook)

app.post('/api/books/comment/:id', [authJwt.verifyToken], controller.commentBook)

app.post('/api/books/voteBookOfTheMonth/:id', [authJwt.verifyToken], controller.voteBookofTheMonth)

app.get('/api/books/getAllSuggestedBooksForTheMonth', [authJwt.verifyToken], controller.getAllBooks)


app.post('/api/books/suggestBookForTheMonth/:id', [authJwt.verifyToken], controller.suggestBookOfTheMonth)



