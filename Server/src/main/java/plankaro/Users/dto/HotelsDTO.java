package plankaro.Users.dto;

import java.math.BigDecimal;

public class HotelsDTO {
	
	private int hotelId;
	
	private String name;
	
	private String location;
	
	private String description;
		
	private BigDecimal pricePerNight;
	

	private byte[] hotelimage;



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

	

	public byte[] getHotelimage() {
		return hotelimage;
	}

	public void setHotelimage(byte[] hotelimage) {
		this.hotelimage = hotelimage;
	}

	

	
	
}