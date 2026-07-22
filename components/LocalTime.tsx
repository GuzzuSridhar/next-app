"use client";

const localTime = new Date().toLocaleTimeString();

function LocalTime() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <p>
        <strong>Local Time:</strong> {localTime}
      </p>

      <p>This time was generated on the client Browser</p>
    </main>
  );
}

export default LocalTime;
