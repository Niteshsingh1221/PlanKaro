package plankaro.Users.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="BookingDetails")
public class BookingDetails {
	
	

	@Id
	@Column(name="serialno")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer serialno;
	
	@Column(name="hotelname")
	String hotelname;
	
	@Column(name="username")
	String username;
	
	
	@Column(name="personemail")
	String personemail;
	
	@Column(name="personphone")
	String personphone;
	
	@Column(name="checkindate")
	String checkindate;
	
	@Column(name="checkoutdate")
	String checkoutdate;
	
	@Column(name="numofrooms")
	String numofrooms;
	
	@Column(name="totalamount")
	String totalamount;
	
	@Column(name="userid")
	String userid;
	
	@Column(name="hotelid")
	String hotelid;
	
	@Column(name="hoteladdress")
	String hoteladdress;



public Integer getSerialno() {
	return serialno;
}

public void setSerialno(Integer serialno) {
	this.serialno = serialno;
}

public String getHotelname() {
	return hotelname;
}

public void setHotelname(String hotelname) {
	this.hotelname = hotelname;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPersonemail() {
	return personemail;
}

public void setPersonemail(String personemail) {
	this.personemail = personemail;
}

public String getPersonphone() {
	return personphone;
}

public void setPersonphone(String personphone) {
	this.personphone = personphone;
}

public String getCheckindate() {
	return checkindate;
}

public void setCheckindate(String checkindate) {
	this.checkindate = checkindate;
}

public String getCheckoutdate() {
	return checkoutdate;
}

public void setCheckoutdate(String checkoutdate) {
	this.checkoutdate = checkoutdate;
}

public String getNumofrooms() {
	return numofrooms;
}

public void setNumofrooms(String numofrooms) {
	this.numofrooms = numofrooms;
}

public String getTotalamount() {
	return totalamount;
}

public void setTotalamount(String totalamount) {
	this.totalamount = totalamount;
}

public String getUserid() {
	return userid;
}

public void setUserid(String userid) {
	this.userid = userid;
}

public String getHotelid() {
	return hotelid;
}

public void setHotelid(String hotelid) {
	this.hotelid = hotelid;
}

public String getHoteladdress() {
	return hoteladdress;
}

public void setHoteladdress(String hoteladdress) {
	this.hoteladdress = hoteladdress;
}




}
