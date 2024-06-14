let flight = {
  altitude: 0,
  speed: 0
};

const altitudeInput = document.getElementById('altitudeInput');
const speedInput = document.getElementById('speedInput');
const updateButton = document.getElementById('updateButton');
const flightInfo = document.getElementById('flightInfo');

function updateFlightInfo() {
  flightInfo.innerHTML = `
    <p>Altitude: ${flight.altitude} feet</p>
    <p>Speed: ${flight.speed} km/h</p>
  `;
}

updateButton.addEventListener('click', () => {
  flight.altitude = parseInt(altitudeInput.value);
  flight.speed = parseInt(speedInput.value);
  updateFlightInfo();
});

updateFlightInfo();
