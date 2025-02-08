package plankaro.Users.service;

import java.util.List;


import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.LocationDto;

public interface LocationService {
	
	public boolean  addlocation(String locationname,MultipartFile locationimage);
	
	public List<LocationDto> getalllocation();
	
	public boolean deleteLocation(int locationId);

}
