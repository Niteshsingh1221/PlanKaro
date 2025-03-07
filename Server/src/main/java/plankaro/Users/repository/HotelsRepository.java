package plankaro.Users.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import plankaro.Users.entity.Hotels;



@Repository
public interface HotelsRepository extends JpaRepository<Hotels, Integer> 
{
	
	@Query("select objHotel from Hotels objHotel where objHotel.name LIKE %:name%")
	public List<Hotels> getHotelsWithLike(@Param("name")String name);
	
	// This is JPQL Query for fetching Hotels By Location
	 @Query("select objHotel from Hotels objHotel where objHotel.location LIKE %:location%")
	  public  List<Hotels> findHotelsByLocation(@Param("location") String location);
}
