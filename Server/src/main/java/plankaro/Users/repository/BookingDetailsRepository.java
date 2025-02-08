package plankaro.Users.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import plankaro.Users.entity.BookingDetails;
@Repository
public interface BookingDetailsRepository extends JpaRepository<BookingDetails, Integer> {
	
	 
    @Query("SELECT objBooking FROM BookingDetails objBooking WHERE objBooking.username LIKE %:username%")
    List<BookingDetails> getBookingByUsername(@Param("username") String username);

 
    @Modifying
    @Transactional
    @Query("DELETE FROM BookingDetails objBooking WHERE objBooking.username = :username")
    int cancelBooking(@Param("username") String username);
}
