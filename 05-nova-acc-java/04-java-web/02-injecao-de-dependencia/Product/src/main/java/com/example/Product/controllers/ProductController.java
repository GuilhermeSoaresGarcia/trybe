package com.example.Product.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Product.services.ProductService;

@RestController
@RequestMapping("/product") // <-- rota a ser usada
public class ProductController {
  private ProductService productService;

  @Autowired
  public ProductController(ProductService productService){
    this.productService = productService;
  }

  @GetMapping // <-- método get da rota "/product"
  /* Acredito que, dependendo do que precisaríamos, poderia ser  
  @PostMapping
  @DeleteMapping
  @PatchMapping
  @PutMapping
   */ 
  public String getMessage(){
    return productService.getMessage();
  }

}
