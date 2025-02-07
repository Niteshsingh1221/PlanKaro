package plankaro.Users.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import plankaro.Users.dto.UsersDto;
import plankaro.Users.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/users")
public class Controller {
	
	@Autowired
	UserService userservice;
	
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody UsersDto usersdto) {
		return userservice.login(usersdto);
	}
	
	@PostMapping("/newuser")
	public  Map<String, Object> NewUser(@RequestBody UsersDto usersdto) {
		

		return userservice.NewUser(usersdto);
	}
	
	@PutMapping("/updateuser")
	public boolean UpdateUser(@RequestBody UsersDto usersdto) {
		return userservice.UpdateUser(usersdto);
	}

	@GetMapping("/getbyid/{id}")
	public UsersDto GetByUsername(@PathVariable("id") Integer id) {
		
		return userservice.getByUsername(id);
		
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public boolean DeleteUser(@PathVariable("id") Integer id) {
		return userservice.DeleteUser(id);
	}

}
