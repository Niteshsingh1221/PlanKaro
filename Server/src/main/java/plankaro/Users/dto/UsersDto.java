package plankaro.Users.dto;



import plankaro.Users.enumtype.Gender;

public class UsersDto {
	
	Integer user_id;
	String username;
	String fullname;
	String email;
	String password;
	String mobile_no;
	String dateofbirth;
	Gender gender;
	
	


	public UsersDto() {
		// Default constructor
	}

	public UsersDto(Integer user_id, String username, String fullname, String email, String password, String mobile_no,
			String dateofbirth, Gender gender) {
		this.user_id = user_id;
		this.username = username;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		this.dateofbirth = dateofbirth;
		this.gender = gender;
		
	
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	
	
	
}
