package plankaro.Users.entity;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import plankaro.Users.enumtype.Gender;


@Entity
@Table(name="users")
public class Users {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer user_id;
	
	
	@Column(name="username")
	String username;
	
	@Column(name="fullname")
	String fullname;
	
	@Column(name="email")
	String email;
	
	@Column(name="password")
	String password;
	
	@Column(name="mobile_no")
	String mobile_no;
	
	@Column(name="dateofbirth")
	String dateofbirth;
	@Enumerated(EnumType.STRING)
	Gender gender;
	
	
	
	@Column(name="created_at")
	LocalDateTime created_at;
	
	
	
	
	


	public Users() {
		// TODO Auto-generated constructor stub
	}





	public Users(Integer user_id, String username, String fullname, String email, String password, String mobile_no,
			String dateofbirth, Gender gender,  LocalDateTime created_at ) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		this.dateofbirth = dateofbirth;
		this.gender = gender;
		
		this.created_at= created_at;
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





	




	public LocalDateTime getCreated_at() {
		return created_at;
	}





	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}
	
	
	
	

}



