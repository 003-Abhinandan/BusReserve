package com.example.demo.config;
 import com.example.demo.Services.CustomUserDetailsService;
 import com.example.demo.helper.JwtAuthenticationEntryPoint;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.context.annotation.Bean;
 import org.springframework.context.annotation.Configuration;
 import org.springframework.security.authentication.AuthenticationManager;
 import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
 import org.springframework.security.config.annotation.web.builders.HttpSecurity;
 import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
 import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
 import org.springframework.security.config.http.SessionCreationPolicy;
 import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
 import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
 @EnableWebSecurity
public class MySecurityConfig  extends WebSecurityConfigurerAdapter
{
 @Autowired
 private JwtAuthenticationFilter jwtFilter;
 @Autowired
 private JwtAuthenticationEntryPoint entryPoint;
 @Autowired
 private CustomUserDetailsService customUserDetailsService;
//permits which url can be accessed
 @Override
 protected void configure(HttpSecurity http) throws Exception {
  http
          .csrf()
          .disable()
          .cors()
          .disable()
          .authorizeRequests()
          .antMatchers("/token").permitAll()
          .antMatchers("/error").permitAll()
          .anyRequest().authenticated()
          .and()
          .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
          .and()
          .exceptionHandling().authenticationEntryPoint(entryPoint);



  http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
   }

 //tells which authentication to be used
 @Override
 protected void configure(AuthenticationManagerBuilder auth) throws Exception {
  auth.userDetailsService(customUserDetailsService);
 }

 @Bean
 public BCryptPasswordEncoder passwordEncoder() {
  return  new BCryptPasswordEncoder();
 }

 @Bean
 public AuthenticationManager authenticationManagerBean() throws Exception {
  return super.authenticationManagerBean();
 }
}
