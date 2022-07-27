const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  startTowns = []
  this.journeys.forEach(journey => {
  return startTowns.push(journey.startLocation)
});
return startTowns
};

Traveller.prototype.getJourneyEndLocations = function () {
  endTowns = []
  this.journeys.forEach(journey => {
  return endTowns.push(journey.endLocation)
  });
  return endTowns

};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return this.journeys.filter(journey => journey.transport === transport)
  };
  
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((now, next) => now + next.distance, 0) 
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let journeyTransport = []
  for (journey of this.journeys) {
  journeyTransport.push(journey.transport)
  }
  transport = journeyTransport.filter((v, i, a) => a.indexOf(v) === i)
  return transport
};


module.exports = Traveller;
