package com.nirmalya.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.nirmalya.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel = "bookCategiory", path = "book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}