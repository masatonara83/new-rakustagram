package dev.itboot.rest.repository;

import org.apache.ibatis.annotations.Mapper;

import dev.itboot.rest.model.Tag;

@Mapper
public interface TagMapper {

	public void insertTag(Tag tag);
	
}
