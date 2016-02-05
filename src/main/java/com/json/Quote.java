package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Quote {

    private String type;
    private Value value;

    public Quote() {
    }

    public String getType() {
        System.out.println("Quote gettype");
        return type;
    }

    public void setType(String type) {
        System.out.println("Quote settype");

        this.type = type;
    }

    public Value getValue() {
        System.out.println("Quote getvalue");

        return value;
    }

    public void setValue(Value value) {
        System.out.println("Quote setvalue");

        this.value = value;
    }
}