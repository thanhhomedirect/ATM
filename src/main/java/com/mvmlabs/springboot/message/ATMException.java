package com.mvmlabs.springboot.message;

public class ATMException extends Exception {

	private static final long serialVersionUID = 1L;

	public ATMException(String message) {
		super(message);
	}
}
