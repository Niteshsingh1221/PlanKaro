package plankaro.Users.dto;


public class BookingDetailsDto {
	

	    Integer serialno;
	    String hotelname;
	    String username;
	    String personemail;
	    String personphone;
	    String checkindate;
	    String checkoutdate;
	    String numofrooms;
	    String totalamount;
		String userid;
		
		String hotelid;
		String hoteladdress;
		
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
	}



