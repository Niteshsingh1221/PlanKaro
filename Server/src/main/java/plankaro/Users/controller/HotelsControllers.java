package plankaro.Users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.HotelsDTO;
import plankaro.Users.dto.UpdateHotelDto;
import plankaro.Users.service.HotelsService;
import plankaro.response.HotelResponse;

@RestController
@CrossOrigin
@RequestMapping("/hotels")
public class HotelsControllers {

	@Autowired
	HotelsService hotelsService;

	@GetMapping("/getHotel/{hid}")
	public HotelsDTO getHotelDetails(@PathVariable("hid") int hotelsId) {
		return hotelsService.getHotelById(hotelsId);
	}

	@PostMapping("/addHotel")
	public boolean addHotel(@RequestPart HotelsDTO dto, @RequestPart("hotelimage") MultipartFile imageFile) {
		return hotelsService.addNewHotel(dto, imageFile);
	}

	@GetMapping("/getAllHotels")
	public List<HotelsDTO> getAllHotels() {
		return hotelsService.allHotels();
	} 

	// get hotels by Name
	@GetMapping("/gethotelbylocation")
	public List<HotelsDTO> getHotelsNameLike(@RequestParam("nameLike") String nameLike) {
		return hotelsService.HotelsNameLike(nameLike);
	}

	@DeleteMapping("/deleteById/{hid}")

	public HotelResponse deletebyId(@PathVariable("hid") int hid) {
		return hotelsService.deleteById(hid);
	}

	@PutMapping("update/{id}")

	public HotelResponse updateHotel(@PathVariable("id") int hid, @RequestBody HotelsDTO dto) {
		return hotelsService.updateHotel(hid, dto);
	}

	@GetMapping("/location/{loc}")
	public List<HotelsDTO> getHotelsByLocation(@PathVariable("loc") String locationLike) {
		return hotelsService.HotelLocationLike(locationLike);
	}
}
