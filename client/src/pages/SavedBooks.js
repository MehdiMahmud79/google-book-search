import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from "@apollo/client";
import "./style.css";
import { getMe, deleteBookMutation } from "../utils/queries";
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

const SavedBooks = () => {
  const [userData, setUserData] = useState({});
  const { data, loading } = useQuery(getMe);
  const [deleteBook, { data: deleteBookData }] =
    useMutation(deleteBookMutation);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database

  const handleDeleteBook = async (bookId) => {
    try {
      const { data } = await deleteBook({ variables: { bookId } });
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <button className="btn-lg disabled  px-4 py-2 w-100">
            Your favourite Books{" "}
            <span className="badge badge-danger display-2">
              {data.me.savedBooks.length}
            </span>
          </button>
        </Container>
      </Jumbotron>
      <Container>
        <CardColumns className="bg-info p-3 ">
          {data.me.savedBooks.map((book) => {
            return (
              <Card
                key={book.bookId}
                border="dark"
                className="view overlay zoom cardBody"
              >
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    🗑️ Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
