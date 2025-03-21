import StarRatings from "react-star-ratings";

export default function StarRatingComponent({rating}){
    
    return (
      <div className=" flex  items-end gap-[13px]">
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="2px"
        />
        <p className="  font-sm">
          {rating}/5
        </p>
      </div>
    );
}