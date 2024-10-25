import React, { useState } from "react";

const Booking = () => {
  const seatLayout = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  const SEAT_PRICE = 20;

  let [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);
  // Handle seat selection
  const handleSeatClick = (row, col) => {
    const seatId = `${row}-${col}`;
    if (selectedSeats.includes(seatId)) {
      // Remove seat if already selected
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      // Add seat if not selected
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Calculate total price
  const totalPrice = selectedSeats.length * SEAT_PRICE;

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-center font-bold my-4">Book your seat Now</h2>

      {/* Seat chart layout */}
      <div style={{ display: "grid", gap: "10px" }}>
        {seatLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Left seats */}
            <div style={{ display: "flex", gap: "10px" }}>
              {row.slice(0, 2).map((seat, colIndex) => {
                const seatId = `${rowIndex}-${colIndex}`;
                const isSelected = selectedSeats.includes(seatId);
                const isAvailable = seat === 1;

                return (
                  <div
                    key={colIndex}
                    onClick={() =>
                      isAvailable && handleSeatClick(rowIndex, colIndex)
                    }
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: isSelected
                        ? "green"
                        : isAvailable
                        ? "lightgray"
                        : "red",
                      color: isAvailable ? "black" : "white",
                      textAlign: "center",
                      lineHeight: "40px",
                      cursor: isAvailable ? "pointer" : "not-allowed",
                      borderRadius: "5px",
                    }}
                  >
                    {isAvailable ? "A" : "X"}
                  </div>
                );
              })}
            </div>

            {/* Aisle gap */}
            <div style={{ width: "30px" }}></div>

            {/* Right seats */}
            <div style={{ display: "flex", gap: "10px" }}>
              {row.slice(2, 4).map((seat, colIndex) => {
                const seatId = `${rowIndex}-${colIndex + 2}`;
                const isSelected = selectedSeats.includes(seatId);
                const isAvailable = seat === 1;

                return (
                  <div
                    key={colIndex + 2}
                    onClick={() =>
                      isAvailable && handleSeatClick(rowIndex, colIndex + 2)
                    }
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: isSelected
                        ? "green"
                        : isAvailable
                        ? "lightgray"
                        : "red",
                      color: isAvailable ? "black" : "white",
                      textAlign: "center",
                      lineHeight: "40px",
                      cursor: isAvailable ? "pointer" : "not-allowed",
                      borderRadius: "5px",
                    }}
                  >
                    {isAvailable ? "A" : "X"}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected seats and total price */}
      <div style={{ marginTop: "20px" }}>
        <h3>Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <button
          onClick={() => {
            alert("Seats purchased!");
            selectedSeats = [];
          }}
          disabled={selectedSeats.length === 0}
          className="btn btn-warning"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Booking;
