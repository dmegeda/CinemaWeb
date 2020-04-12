export default class MockMovieInfoFetcher {
    fetchInfo = (movieId) => {
        return {
            "id": movieId,
            "title": "Деяка назва " + movieId,
            "description": "Деякий сюжет " + movieId,
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg==",
            "age": "Деякий вік " + movieId,
            "originalTitle": "Деяка оригінальна назва " + movieId,
            "releaseDate": "Деяка дата виходу " + movieId,
            "genres": "Деякі жанри " + movieId,
            "duration": "Деяка тривалість " + movieId,
            "starring": "Деякі актори " + movieId,
        };
    };
}