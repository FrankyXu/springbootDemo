package com.yisquare.springboot.dao;

import com.yisquare.springboot.pojo.SysToken;
import org.apache.ibatis.annotations.Mapper;



@Mapper
public interface TokenDao {

    SysToken findByToken(String token);

    SysToken findByUserCode(String userCode);

    int saveToken(SysToken sysToken);

    int deleteToken(String token);

    int updateToken(SysToken sysToken);

}
