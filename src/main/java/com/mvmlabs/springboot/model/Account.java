/***************************************************************************
 * Copyright 2018 by HOMEDIRECT - All rights reserved.                *    
 **************************************************************************/
package com.mvmlabs.springboot.model;

/**
 *  Author : Pham Duc Anh
 *          Email: anh.phamduc@homedirect.com.vn
 * Sep 17, 2018
 */

public class Account {
  private Integer id;
  private String userName;
  private String accountNumber;
  private String passWord;
  private Double amount;
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  public String getAccountNumber() {
    return accountNumber;
  }
  public void setAccountNumber(String accountNumber) {
    this.accountNumber = accountNumber;
  }
  public String getPassWord() {
    return passWord;
  }
  public void setPassWord(String passWord) {
    this.passWord = passWord;
  }
  public Double getAmount() {
    return amount;
  }
  public void setAmount(Double amount) {
    this.amount = amount;
  }
}
