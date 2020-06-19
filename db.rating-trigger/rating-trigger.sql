CREATE FUNCTION public.log_reviews_changes() RETURNS trigger
LANGUAGE plpgsql
AS $$BEGIN
UPDATE hotels
SET reviews_rating = (SELECT avg(feedbacks.star) from hotels join rooms on hotels.id=rooms.hotel_id join orders on orders.room_id=rooms.id
join feedbacks on feedbacks.order_id=orders.id
WHERE hotels.id=(SELECT r.hotel_id FROM rooms as r WHERE r.id = (SELECT o.room_id FROM orders as o WHERE o.id = NEW.order_id)))
where id=(SELECT r.hotel_id FROM rooms as r WHERE r.id = (SELECT o.room_id FROM orders as o WHERE o.id = NEW.order_id));
RETURN NEW;
END;
$$;


ALTER FUNCTION public.log_reviews_changes() OWNER TO postgres;


CREATE TRIGGER reviews_changes AFTER INSERT ON public.feedbacks FOR EACH ROW EXECUTE PROCEDURE public.log_reviews_changes();
