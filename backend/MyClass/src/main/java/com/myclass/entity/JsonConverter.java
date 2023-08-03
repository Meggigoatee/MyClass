package com.myclass.entity;

import java.io.IOException;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class JsonConverter implements AttributeConverter<Map<String, Object>, String>{
	
	private final static ObjectMapper objectMapper = new ObjectMapper();

	@Override
	public String convertToDatabaseColumn(Map<String, Object> attribute) {
		 try {
	            return objectMapper.writeValueAsString(attribute);
	        } catch (JsonProcessingException e) {
	            throw new RuntimeException("Error converting JSON to String", e);
	        }
	}

	@Override
	public Map<String, Object> convertToEntityAttribute(String dbData) {
		try {
            return objectMapper.readValue(dbData, new TypeReference<Map<String, Object>>() {});
        } catch (IOException e) {
            throw new RuntimeException("Error converting String to JSON", e);
        }
	}
	
	

}
