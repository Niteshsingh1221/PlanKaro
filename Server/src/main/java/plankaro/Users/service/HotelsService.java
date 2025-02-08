package plankaro.Users.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.HotelsDTO;
import plankaro.Users.dto.UpdateHotelDto;
import plankaro.response.HotelResponse;

public interface HotelsService {
	
	public boolean addNewHotel(HotelsDTO dto , MultipartFile imageFile );
	public HotelsDTO getHotelById(int hotelId);
	public List<HotelsDTO> allHotels();
	public List<HotelsDTO> HotelsNameLike(String nameLike);
	public HotelResponse deleteById (int hid);
	public HotelResponse updateHotel (int hid , HotelsDTO hotelDto);
	public List<HotelsDTO> HotelLocationLike(String locationLike);
}
