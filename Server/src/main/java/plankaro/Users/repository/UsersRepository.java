package plankaro.Users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plankaro.Users.entity.Users;
@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

}
