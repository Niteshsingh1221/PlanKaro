package plankaro.Users.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plankaro.Users.dto.BookingDetailsDto;
import plankaro.Users.entity.BookingDetails;
import plankaro.Users.entity.Users;
import plankaro.Users.repository.BookingDetailsRepository;
import plankaro.Users.repository.UsersRepository;
@Service
public class BookingDetailsServiceImpl implements BookingDetailsService {
	
	@Autowired
	BookingDetailsRepository bookingrepo;
	
	@Autowired
	UsersRepository usersrepo;
	

	   @Override
	    public List<BookingDetailsDto> getBookingByusername(String username) {
	        List<BookingDetails> bookings = bookingrepo.getBookingByUsername(username);

	        // Convert entity list to DTO list
	        return bookings.stream().map(booking -> {
	            BookingDetailsDto dto = new BookingDetailsDto();
	            BeanUtils.copyProperties(booking, dto);
	            return dto;
	        }).collect(Collectors.toList());
	    }

	@Override
	public boolean addbookingdetails(BookingDetailsDto bookingdetailsdto) {
		
		
		System.out.println(bookingdetailsdto.getPersonphone());
	BookingDetails bookingdetails =new BookingDetails();
	List<Users> userlist=usersrepo.findAll();
	for(Users u : userlist) {
		if(bookingdetailsdto.getusername().equals(u.getUsername())) {
			BeanUtils.copyProperties(bookingdetailsdto, bookingdetails);
			bookingrepo.save(bookingdetails);
			
				return  true;
			
		}
		}
			
	

		
				return false;
	}


		
	

	@Override
	public List<BookingDetailsDto> getallbooking() {
		
		Iterator<BookingDetails> iter = bookingrepo.findAll().iterator();
		ArrayList<BookingDetailsDto> finalList = new ArrayList<>();
		while(iter.hasNext())
		{
			BookingDetails b = iter.next();
			
			BookingDetailsDto dto = new BookingDetailsDto();
				BeanUtils.copyProperties(b, dto);
				finalList.add(dto);
				
				
		}
		
		return finalList;
	}

	@Override
	public int cancelbooking(String username) {
	    return bookingrepo.cancelBooking(username); // ✅ Correct (returns int)
	}
	

}
