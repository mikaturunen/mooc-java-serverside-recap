package com.application;


import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CsrfHeaderFilter extends OncePerRequestFilter {
	@Override
	protected void doFinterlInterlan(
			HttpServletRequest request,
			HttpServletResponse response,
			FilterChain filterChain
		) throws ServletException, IOException {

		CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

		if (csrf != null) {
			Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");
			String token = csrf.getToken();
			if (cookie == null || token != null && !token.equals(cookie.getValue())) {
				cookie = new Cookie("XSRF-TOKEN", token);
				// TODO fix setPath as it's not safe in general to point it at "/" but for our app this will do now
				cookie.setPath("/");
				response.addCookie(cookie);
			}
		}

		filterChain.doFilter(request, response);
	}
}
