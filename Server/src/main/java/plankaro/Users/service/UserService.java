package plankaro.Users.service;


import java.util.Map;

import plankaro.Users.dto.UsersDto;

public interface UserService {
	
	public Map<String, Object> NewUser(UsersDto usersdto);
	public boolean UpdateUser(UsersDto usersdto);
	public boolean DeleteUser(Integer user_id);
	public UsersDto getByUsername(Integer user_id);
	public Map<String, Object> login(UsersDto usersdto);
	

}