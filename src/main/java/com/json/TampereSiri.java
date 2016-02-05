package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TampereSiri {
    private Siri Siri = new Siri();

    public TampereSiri() {
        System.out.println("TampereSiri CONSTRUCTOR");
    }

    public Siri getSiri() {
        System.out.println("SIRI getSiri");
        return Siri;
    }

    public void setSiri(Siri Siri) {
        System.out.println("SIRI setSiri");
        this.Siri = Siri;
    }
}
