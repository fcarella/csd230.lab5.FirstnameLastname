package csd230.lab5.repositories;

import csd230.lab5.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findById(long id);
}
