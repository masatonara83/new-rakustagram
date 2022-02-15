package dev.itboot.rest.repository;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dev.itboot.rest.model.Password;


@Mapper
public interface PasswordMapper {

	public void savePassword(@Param("currentPassword")String currentPassword, @Param("newPassword")String newPassword);
	
	public Long insertPassword(Password password);
}
