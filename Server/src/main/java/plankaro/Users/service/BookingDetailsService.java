package plankaro.Users.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import plankaro.Users.dto.BookingDetailsDto;
import plankaro.Users.entity.BookingDetails;

public interface BookingDetailsService {
public List<BookingDetailsDto> getBookingByusername(@Param("username")String username);
public boolean addbookingdetails(BookingDetailsDto bookingdetailsdto);
public int cancelbooking(String username);
public List<BookingDetailsDto> getallbooking();

}
