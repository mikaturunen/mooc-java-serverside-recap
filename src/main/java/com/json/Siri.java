package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Siri {
    private com.json.ServiceDelivery ServiceDelivery = new ServiceDelivery();
    private String version;

    public Siri() {
        System.out.println("SIRI CONSTRUCTOR");
    }

    public String getVersion() {
        System.out.println("SIRI getversion");
        return version;
    }

    public void setVersion(String version) {
        System.out.println("SIRI setversion");
        this.version = version;
    }

    public com.json.ServiceDelivery getServiceDelivery() {
        System.out.println("SIRI getservicedelivery");
        return ServiceDelivery;
    }

    public void setServiceDelivery(com.json.ServiceDelivery serviceDelivery) {
        System.out.println("SIRI setservicedelivery");
        this.ServiceDelivery = serviceDelivery;
    }
}
