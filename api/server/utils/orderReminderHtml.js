export const htmlForEmail = (data) => {
    const { fullname, roomTypeName, hotelName, startDate, finishDate } = data;
    return `
    <div>
        <h1>Hotel Reservation Reminder!</h1>
        <h3>Dear <b>${fullname || `Client`}!</b></h3>
        <p>In this letter we just want to remind you about your 
        booked room - <b>${roomTypeName}</b> in hotel - <b>${hotelName}</b>.
        Due to your order, you need to arrive to the ${hotelName} at 
        - <b>${startDate}</b>, and leave at - <b>${finishDate}</b>.
        We wish you to have a nice vacation (or bussiness trip...) and 
        thank You for using our Service! :) 
        </p>
    </div>
    `;
}