package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MonitoredVehicleJourney {
    private String bearing;
    private String delay;
    private String destinationShortName;
    private String directionRef;

    private String journeyPatternRef;
    private String lineRef;
    private String operatorRef;
    private String originAimedDepartureTime;
    private String originShortName;
    private String speed;
    private VehicleLocation vehicleLocation;
    private String vehicleRef;

    public MonitoredVehicleJourney() {
    }

    public String getBearing() {
        return bearing;
    }

    public void setBearing(String bearing) {
        this.bearing = bearing;
    }

    public String getDelay() {
        return delay;
    }

    public void setDelay(String delay) {
        this.delay = delay;
    }

    public String getDestinationShortName() {
        return destinationShortName;
    }

    public void setDestinationShortName(String destinationShortName) {
        this.destinationShortName = destinationShortName;
    }

    public String getDirectionRef() {
        return directionRef;
    }

    public void setDirectionRef(String directionRef) {
        this.directionRef = directionRef;
    }

    public String getJourneyPatternRef() {
        return journeyPatternRef;
    }

    public void setJourneyPatternRef(String journeyPatternRef) {
        this.journeyPatternRef = journeyPatternRef;
    }

    public String getLineRef() {
        return lineRef;
    }

    public void setLineRef(String lineRef) {
        this.lineRef = lineRef;
    }

    public String getOperatorRef() {
        return operatorRef;
    }

    public void setOperatorRef(String operatorRef) {
        this.operatorRef = operatorRef;
    }

    public String getOriginAimedDepartureTime() {
        return originAimedDepartureTime;
    }

    public void setOriginAimedDepartureTime(String originAimedDepartureTime) {
        this.originAimedDepartureTime = originAimedDepartureTime;
    }

    public String getOriginShortName() {
        return originShortName;
    }

    public void setOriginShortName(String originShortName) {
        this.originShortName = originShortName;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public String getVehicleRef() {
        return vehicleRef;
    }

    public void setVehicleRef(String vehicleRef) {
        this.vehicleRef = vehicleRef;
    }

    public VehicleLocation getVehicleLocation() {
        return vehicleLocation;
    }

    public void setVehicleLocation(VehicleLocation vehicleLocation) {
        this.vehicleLocation = vehicleLocation;
    }
}
