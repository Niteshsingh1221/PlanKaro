package plankaro.Users.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.HotelsDTO;
import plankaro.Users.dto.UpdateHotelDto;
import plankaro.Users.entity.Hotels;
import plankaro.Users.repository.HotelsRepository;
import plankaro.hotels.exceptions.HotelNotFoundException;
import plankaro.response.HotelResponse;

@Service
public class HotelsServiceImpl implements HotelsService
{
	@Autowired
	HotelsRepository repository;
	
	@Override
	public boolean addNewHotel(HotelsDTO dto, MultipartFile imageFile ) {

		 try {
		        
			 dto.setHotelimage(imageFile.getBytes());
			 

		        Hotels hotelEntity = new Hotels();
		        BeanUtils.copyProperties(dto, hotelEntity);

		        repository.save(hotelEntity);

		        return true; 
		    } catch (IOException e) {
		        e.printStackTrace();
		    }
		 return false; 
	}

	@Override
	public HotelsDTO getHotelById(int hotelId) {
		
		Optional<Hotels> optHotel = repository.findById(hotelId);
		if(optHotel.isPresent())
		{
			Hotels entityHotels =optHotel.get();
			
			HotelsDTO dto = new HotelsDTO();
			BeanUtils.copyProperties(entityHotels, dto);
			return dto;
		}
		else
			return null;
		
		
	}

	@Override
	public List<HotelsDTO> allHotels() {
		
		Iterator<Hotels> iter = repository.findAll().iterator();
		ArrayList<HotelsDTO> finalList = new ArrayList<>();
		while(iter.hasNext())
		{
			Hotels eHotel = iter.next();
			
			HotelsDTO dto = new HotelsDTO();
				BeanUtils.copyProperties(eHotel, dto);
				finalList.add(dto);
				
				
		}
		
		
		
		return finalList;
	}
	
	@Override
	public List<HotelsDTO> HotelsNameLike(String nameLike) {
		
		List<Hotels> allHotels = repository.getHotelsWithLike(nameLike);

        // Convert the list of Hotels entities to DTOs
        List<HotelsDTO> hotelsDTOs = new ArrayList<>();
        for (Hotels hotels : allHotels) {
        	HotelsDTO dto = new HotelsDTO();
            BeanUtils.copyProperties(hotels, dto);
            hotelsDTOs.add(dto);
            System.out.println(hotelsDTOs.toString());
        }
        return hotelsDTOs;
	}
	
	
	@Override
	public List<HotelsDTO> HotelLocationLike(String locationLike) {
	    List<Hotels> allHotels = repository.findHotelsByLocation(locationLike);
	    
	    List<HotelsDTO> hotelsDTOs = new ArrayList<>();
	    for (Hotels hotel : allHotels) {
	        HotelsDTO dto = new HotelsDTO();
	        BeanUtils.copyProperties(hotel, dto);
	        hotelsDTOs.add(dto);
	    }
	    return hotelsDTOs;
	}

	
	@Override
	public HotelResponse deleteById (int hid)
	{
		HotelResponse response = new HotelResponse();
		
		try
		{
			Hotels hotels = repository.findById(hid).orElseThrow(() -> new HotelNotFoundException("Hotel with ID" +" " + hid + " "+ "not found"));
			repository.deleteById(hid);
			response.setCode(HttpStatus.OK.value());
			response.setMessage("Ticket Deleted Successfully");
			response.setResult(true);
		}
		catch(HotelNotFoundException h)
		{
		    response.setCode(HttpStatus.NOT_FOUND.value());
		    response.setMessage("Hotel with ID " + hid + " not found");
		    response.setResult(false);
		}

		return response;
	}
	
	public HotelResponse updateHotel(int hid, HotelsDTO hotelDto) {

		HotelResponse response = new HotelResponse();
		
		try
		{
			Hotels hotels = repository.findById(hid)
					.orElseThrow(() -> new HotelNotFoundException("Hotel with ID" +" " + hid + " "+ "not found"));
			 
			BeanUtils.copyProperties(hotelDto, hotels);

			
			response.setCode(HttpStatus.OK.value());
			response.setMessage("Ticket found");
			response.setResult(true);
			repository.save(hotels);
		}
		catch(HotelNotFoundException h)
		{
			response.setCode(HttpStatus.NOT_FOUND.value()); 
			response.setMessage(h.getMessage());
			response.setResult(false);
			response.setHotelDto(null);
		}
		return response;
	}

}
