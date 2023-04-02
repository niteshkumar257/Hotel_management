const reservation = () => {
    return (
        <div className="booking-container">
            <div className="booking-form">
                <form>
                    <span className="heading">Doshona Hotel</span>
                    <div className="detail1">
                        <input type="name" placeholder="First Name" className="in"/>
                        <input type="name" placeholder="Last Name" className="in"/>
                    </div>
                    <div className="detail2">
                        <input type="email" placeholder="Email" id="email" className="in"/>
                        <input type="tel" placeholder="Contact no" className="in"/>
                    </div>
                    <div className="member">
                        <input type="number" placeholder="No of Adults" className="in"/>
                        <input type="number" placeholder="No of Children" className="in"/>
                    </div>
                    <div className="check left">
                        <div className="date">
                            <span>Check-in date</span>
                            <input type="date" />
                        </div>
                        <div className="time" id="dtIn">
                            <span>Check in time</span>
                            <input type="time" />
                        </div>
                    </div>
                    <div className="check right">
                        <div className="date">
                            <span>Check-out date</span>
                            <input type="date" />
                        </div>
                        <div className="time">
                            <span>Check out time</span>
                            <input type="time" />
                        </div>
                    </div>
                    <div className="room-type">
                        <p> Select room type:
                            <select id="select1">
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="king">King</option>
                                <option value="Queen">Queen</option>
                                <option value="suite">Presidential suite</option>
                            </select>
                        </p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default reservation;