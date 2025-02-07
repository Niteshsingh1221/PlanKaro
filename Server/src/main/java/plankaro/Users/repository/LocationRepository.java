package plankaro.Users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plankaro.Users.entity.Location;
@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

}
