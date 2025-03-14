package plankaro.Users.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import plankaro.Users.dto.LocationDto;
import plankaro.Users.dto.UsersDto;
import plankaro.Users.entity.Location;
import plankaro.Users.entity.Users;
import plankaro.Users.repository.UsersRepository;
@Service
public class UsersServiceImpl implements UserService {
	
	
	@Autowired
	UsersRepository usersrepository;

	//private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
	
	
	@Override
	public Map<String, Object> NewUser(UsersDto usersdto) {
		
		Users users = new Users();
		
		users.setCreated_at(LocalDateTime.now());
		System.out.println(usersdto.getEmail());
		
		
		
		List<Users> allUsers = usersrepository.findAll();
		
		for(Users u : allUsers) {
			if(usersdto.getEmail().equals(u.getEmail()) || usersdto.getUsername().equals(u.getUsername())) {
			

				Map<String, Object> response = new HashMap<>();
		        response.put("status", false);
		        response.put("msg", "Email Already Exists");
		        return response;
			}
		}
		BeanUtils.copyProperties(usersdto, users);
		usersrepository.save(users);
		
		
		
		
        Map<String, Object> response = new HashMap<>();
        response.put("status", true);
        response.put("msg", "Registration Successful");
        return response;
    }			
	

	@Override
	public boolean UpdateUser(UsersDto usersdto) {
	    // Retrieve the user by their ID
	    Users users = usersrepository.findById(usersdto.getUser_id()).get();
	    
	    // Update fields based on the values provided in the UsersDto
	    if(usersdto.getUsername() != null && !usersdto.getUsername().isEmpty()) {
	        users.setUsername(usersdto.getUsername());
	    }
	    if(usersdto.getEmail() != null && !usersdto.getEmail().isEmpty()) {
	        users.setEmail(usersdto.getEmail());
	    }
	    if(usersdto.getPassword() != null && !usersdto.getPassword().isEmpty()) {
	        users.setPassword(usersdto.getPassword());
	    }
	    if(usersdto.getFullname() != null && !usersdto.getFullname().isEmpty()) {
	        users.setFullname(usersdto.getFullname());
	    }
	    if(usersdto.getMobile_no() != null && !usersdto.getMobile_no().isEmpty()) {
	        users.setMobile_no(usersdto.getMobile_no());
	    }
	    if(usersdto.getGender() != null) {
	        users.setGender(usersdto.getGender());
	    }
	    if(usersdto.getMobile_no() != null && !usersdto.getMobile_no().isEmpty()) {
	        users.setMobile_no(usersdto.getMobile_no());
	    }
	    if(usersdto.getDateofbirth() != null) {
	        users.setDateofbirth(usersdto.getDateofbirth());
	    }

	    // Save the updated user data to the database
	    usersrepository.save(users);
	    return true;
	}


	@Override
	public boolean DeleteUser(Integer user_id) {
	    Optional<Users> optionalUser = usersrepository.findById(user_id);
	    
	    if (!optionalUser.isPresent()) {
	        // User not found, return false
	        return true;
	    }
	    
	    // User found, delete from repository
	    usersrepository.delete(optionalUser.get());
	    
	    return true;
	}

	@Override
	public UsersDto getByUsername(Integer user_id) {
	    
		Users users = usersrepository.findById(user_id).get();
		UsersDto usersDto = new UsersDto();
		BeanUtils.copyProperties(users, usersDto);
		
	    return usersDto;
	}
	
	
	@Override

	public Map<String, Object> login(UsersDto usersdto) {
//		Users users = new Users();
		List<Users> allUsers = usersrepository.findAll();
		for(Users u :allUsers) {
			if(usersdto.getUsername().equals(u.getUsername()) && usersdto.getPassword().equals(u.getPassword())){
				
				
				
				Map<String,Object> userinfo= new HashMap<>();
				userinfo.put("user", u);
				userinfo.put("status", true);
				return userinfo;
				
			}
		}
		
		Map<String,Object> userinfo= new HashMap<>();
		userinfo.put("status", false);
		return userinfo;
		
	}


	@Override
	public List<UsersDto> getAllUser() {
		
		Iterator<Users> iter = usersrepository.findAll().iterator();
		ArrayList<UsersDto> finalList = new ArrayList<>();
		while(iter.hasNext())
		{
			Users u = iter.next();
			
			UsersDto dto = new UsersDto();
				BeanUtils.copyProperties(u, dto);
				finalList.add(dto);
				
		}
		
		return finalList;
	}

	


}
