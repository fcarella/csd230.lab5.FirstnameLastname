package csd230.lab5.controllers;

public class BookNotFoundException extends RuntimeException{

    BookNotFoundException(Long id) {
        super("Could not find book " + id);
    }
}
