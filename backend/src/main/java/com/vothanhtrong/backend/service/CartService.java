package com.vothanhtrong.backend.service;

import java.util.List;
import com.vothanhtrong.backend.entity.Cart;

public interface CartService {
    public  Cart createCart(Cart Cart);
    public  Cart getCartById(Long CartId);
    public  Cart updateCart( Cart Cart);
    public  void deleteCart(Long CartId);
    public  List <Cart> getAllCarts();

    Cart addToCart(Cart cart);

}



    

