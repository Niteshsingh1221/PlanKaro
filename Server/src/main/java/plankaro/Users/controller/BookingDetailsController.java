package plankaro.Users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import plankaro.Users.dto.BookingDetailsDto;
import plankaro.Users.service.BookingDetailsService;
@RestController
@CrossOrigin
@RequestMapping("/bookingdetails")
public class BookingDetailsController {
	@Autowired
	BookingDetailsService service;
	
	@PostMapping("/addbookingdetail")
	public boolean addbookingdetails(@RequestBody BookingDetailsDto bookingdetailsdto) {
		return service.addbookingdetails(bookingdetailsdto);
	}
	@GetMapping("getBookingByusername/{username}")
public List<BookingDetailsDto> getBookingByusername(@PathVariable("username") String username) {
		
		
		
		return service.getBookingByusername(username);
	}
	
	
	@DeleteMapping("/delete/{username}")
	public int cancelBooking(@PathVariable("username") String username) {
		return service.cancelbooking(username);
	}
	
	@GetMapping("getallbooking")
	public List<BookingDetailsDto> getallbooking(){
		return service.getallbooking();
	}

}
