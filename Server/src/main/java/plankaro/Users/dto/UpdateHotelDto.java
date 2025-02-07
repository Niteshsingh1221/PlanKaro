package plankaro.Users.dto;

import java.math.BigDecimal;

public class UpdateHotelDto {
	
	private String description;
		
	private BigDecimal pricePerNight;
	
	private String imageUrl;

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

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
}
