
package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Value {

    private Long id;

    public Value() {
        System.out.println("VALUE CONSTRUCTOR");
    }

    public Long getId() {
        System.out.println("VALUE getid");
        return this.id;
    }


    public void setId(Long id) {
        System.out.println("VALUE setid");
        this.id = id;
    }
}
