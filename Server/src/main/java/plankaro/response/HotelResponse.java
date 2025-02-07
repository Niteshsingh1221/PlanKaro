package plankaro.response;

import plankaro.Users.dto.HotelsDTO;

public class HotelResponse {
		
	int Code;
	
	String Message;
	
	boolean result;
		
	HotelsDTO hotelDto;

	public int getCode() {
		return Code;
	}

	public void setCode(int code) {
		Code = code;
	}

	public String getMessage() {
		return Message;
	}

	public void setMessage(String message) {
		Message = message;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}

	public HotelsDTO getHotelDto() {
		return hotelDto;
	}

	public void setHotelDto(HotelsDTO hotelDto) {
		this.hotelDto = hotelDto;
	}
	
}
