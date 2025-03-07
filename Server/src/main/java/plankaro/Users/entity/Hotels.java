package plankaro.Users.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="hotels")
public class Hotels {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id", nullable = false)
	private int hotelId;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "location", nullable = false)
	private String location;
	
	@Column(name = "description", nullable = false)
	private String description;
	
	@Column(name = "price_per_night", columnDefinition = "DECIMAL", nullable = false)
	private BigDecimal pricePerNight;
	
	
	
	@Column(name = "hotelimage" ,columnDefinition = "LONGBLOB")
	@Lob
	private byte[] hotelimage;
	

	public byte[] getHotelimage() {
		return hotelimage;
	}



	public void setHotelimage(byte[] hotelimage) {
		this.hotelimage = hotelimage;
	}

	public int getHotelId() {
		return hotelId;
	}


	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public BigDecimal getPricePerNight() {
		return pricePerNight;
	}

	public void setPricePerNight(BigDecimal pricePerNight) {
		this.pricePerNight = pricePerNight;
	}


	
}