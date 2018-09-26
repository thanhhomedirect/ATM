package com.mvmlabs.springboot.model;

<<<<<<< HEAD
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

=======
public class ATMReponse<T> {

	private int code;
	private String message;
	private T data;

	public ATMReponse() {
	}

	public ATMReponse(int code, String message, T data) {
		this.code = code;
		this.message = message;
		this.data = data;
	}
	
>>>>>>> ff8b2755f1647579d05be5dc13ee2e95ce3a9c5a
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

<<<<<<< HEAD
	public AccountResponse getAccountResponse() {
		return accountResponse;
	}

	public void setAccountResponse(AccountResponse accountResponse) {
		this.accountResponse = accountResponse;
=======
	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
>>>>>>> ff8b2755f1647579d05be5dc13ee2e95ce3a9c5a
	}
}
