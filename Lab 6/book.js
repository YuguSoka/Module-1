let book = {
    title: "To Kill a Mockingbird",
    author: {
      firstName: "Harper",
      lastName: "Lee"
    },
    publicationYear: 1960,
    genre: "Fiction",
    pages: 281,
    publisher: {
      name: "J.B. Lippincott & Co.",
      location: "Philadelphia"
    },
    ISBN: "978-0-06-112008-4",
    availability: {
      available: true,
      copies: 12
    },
    ratings: {
      averageRating: 4.27,
      reviews: [
        {
          reviewer: "John Doe",
          rating: 5,
          comment: "A timeless classic."
        },
        {
          reviewer: "Jane Smith",
          rating: 4,
          comment: "A compelling read with profound themes."
        }
      ]
    }
  };
  
  console.log(book);
  