package com.vothanhtrong.backend.service;

import java.util.List;
import com.vothanhtrong.backend.entity.Token;

public interface TokenService {
    public  Token createToken(Token token);
    public  Token getTokenById(Long tokenId);
    public  Token updateToken( Token token);
    public  void deleteToken(Long tokenId);
    public  List <Token> getAllTokens();
}



    

