package com.trustly.labs.pokemon.master.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UsersConfig usersConfig;

    public SecurityConfig(UsersConfig usersConfig) {
        this.usersConfig = usersConfig;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable() // Disable CSRF for H2 console and other endpoints
            .headers()
                .frameOptions().sameOrigin() // Allow H2 console to be displayed in frames
            .and()
            .authorizeRequests()
                .antMatchers("/h2-console/**", "/api/catalog/**", "/favicon.ico").permitAll() // Allow public access to H2 console and catalog
                .antMatchers("/api/masters/**").authenticated() // Secure masters endpoints
                .anyRequest().authenticated() // Secure all other endpoints by default
            .and()
            .httpBasic(); // Use basic authentication
    }

    @Bean
    public UserDetailsService userDetailsService() {
        List<UserDetails> userDetailsList = new ArrayList<>();

        for (UsersConfig.UserDetailsConfig userConfig : usersConfig.getUsers()) {
            userDetailsList.add(User.builder()
                    .username(userConfig.getUsername())
                    .password(passwordEncoder().encode(userConfig.getPassword()))
                    .roles(userConfig.getRoles().split(","))
                    .build());
        }

        return new InMemoryUserDetailsManager(userDetailsList);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
