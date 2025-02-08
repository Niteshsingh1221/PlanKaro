package plankaro.Users.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.LocationDto;
import plankaro.Users.service.LocationService;

@RestController
@CrossOrigin
@RequestMapping("/location")

public class LocationController {
	
	@Autowired
	LocationService locationservice;
	
	@PostMapping("/addlocation")
	public boolean  addlocation(@RequestPart ("locationname") String locationname ,
            @RequestPart("locationimage") MultipartFile locationimage) {
		
		System.out.println("working");
		
		return locationservice.addlocation(locationname, locationimage);
		
	}
	


	
	
	@GetMapping("/getalllocation")
	
	public List<LocationDto> getalllocation(){
		return locationservice.getalllocation();
	}


	@DeleteMapping("delete/{locationId}")
	public boolean deleteById(@PathVariable("locationId") int locationId)
	{
		return locationservice.deleteLocation(locationId);
	}
	
	
	

}
