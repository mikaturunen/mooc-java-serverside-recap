package com.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ServiceDelivery {
    private Long responseTimeStamp;
    private Boolean Status;
    private Boolean MoreData;

    public ServiceDelivery() {
    }

    public Long getResponseTimeStamp() {
        return responseTimeStamp;
    }

    public void setResponseTimeStamp(Long responseTimeStamp) {
        this.responseTimeStamp = responseTimeStamp;
    }

    public Boolean getStatus() {
        return Status;
    }

    public void setStatus(Boolean status) {
        Status = status;
    }

    public Boolean getMoreData() {
        return MoreData;
    }

    public void setMoreData(Boolean moreData) {
        MoreData = moreData;
    }
}
