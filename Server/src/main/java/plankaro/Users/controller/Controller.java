package plankaro.Users.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import plankaro.Users.dto.UsersDto;
import plankaro.Users.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
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
    
    @PutMapping("/updateuser/{user_id}")
    public boolean UpdateUser(@PathVariable("user_id") Integer user_id, @RequestBody UsersDto usersdto) {
        // You can set the user_id from the path variable and the body as the user info
        usersdto.setUser_id(user_id);
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
	
	@GetMapping("/getAll")
	public List<UsersDto> getallUsers()
	{
		return userservice.getAllUser();
	}

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptionsRequest() {
        return ResponseEntity.ok().build();  // Send an OK response for OPTIONS requests
    }
}
