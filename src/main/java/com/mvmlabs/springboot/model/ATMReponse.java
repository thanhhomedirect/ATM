package com.mvmlabs.springboot.model;

public class ATMReponse {

	private int code;
	private String message;
	private AccountResponse accountResponse;

	public ATMReponse(int code, String message, AccountResponse accountResponse) {
		this.code = code;
		this.message = message;
		this.accountResponse = accountResponse;
	}

	public ATMReponse() {
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public AccountResponse getAccountResponse() {
		return accountResponse;
	}

	public void setAccountResponse(AccountResponse accountResponse) {
		this.accountResponse = accountResponse;
	}
}
