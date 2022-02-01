package dev.itboot.rest.repository;

import org.apache.ibatis.annotations.Mapper;

import dev.itboot.rest.model.Image;

@Mapper
public interface ImageMapper {

	public void insertImage(Image image);
}
