package plankaro.Users.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import plankaro.Users.dto.LocationDto;
import plankaro.Users.entity.Location;
import plankaro.Users.repository.LocationRepository;
import plankaro.hotels.exceptions.LocationNotFoundException;
@Service

public class LocationServiceImplementation implements LocationService {
	
	@Autowired
	LocationRepository repo;
	

	@Override
	public boolean addlocation(String locationname, MultipartFile locationimage) {
		Location location = new Location();

		
		try {
			LocationDto locationdto = new LocationDto();
			locationdto.setLocationname(locationname);
			locationdto.setLocationimage(locationimage.getBytes());
			BeanUtils.copyProperties(locationdto, location);
			
			List<Location> locationlist=repo.findAll();
			for(Location l:locationlist) {
				if(locationdto.getLocationname().equals(l.getLocationname())) {
					
					
					boolean flag =false;
					return flag;
				}
			}
			
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		repo.save(location);
		
		
		boolean flag =true;
		return flag;
		
				
	}

	@Override
	public List<LocationDto> getalllocation() {
		Iterator<Location> iter = repo.findAll().iterator();
		ArrayList<LocationDto> finalList = new ArrayList<>();
		while(iter.hasNext())
		{
			Location l = iter.next();
			
			LocationDto dto = new LocationDto();
				BeanUtils.copyProperties(l, dto);
				finalList.add(dto);
				
				
		}
		
		
		
		return finalList;
		
		
	}

	@Override
	public boolean deleteLocation(int locationId) {
		
		try
		{
			@SuppressWarnings("unused")
			Location locationentity = repo.findById(locationId).orElseThrow(()->new LocationNotFoundException("Location wiht Id" + " " + locationId + " " + "not found"));
			repo.deleteById(locationId);
		}
		catch(LocationNotFoundException l)
		{
			System.out.println(l.getLocalizedMessage());
			return false;
		}
		
		return true;
	}

}
