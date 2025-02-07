package plankaro.Users.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="location")

public class Location {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="locationid")
	Integer id;
	
	@Column(name="locationname")
	String locationname;
	
	@Column(name="locationimage",columnDefinition="LONGBLOB")
	@Lob
	byte[] locationimage;
	
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLocationname() {
		return locationname;
	}

	public void setLocationname(String locationname) {
		this.locationname = locationname;
	}

	public byte[] getLocationimage() {
		return locationimage;
	}

	public void setLocationimage(byte[] locationimage) {
		this.locationimage = locationimage;
	}
	

}




