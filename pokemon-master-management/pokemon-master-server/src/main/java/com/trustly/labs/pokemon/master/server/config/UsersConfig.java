package com.trustly.labs.pokemon.master.server.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "users")
public class UsersConfig {

    private List<UserDetailsConfig> users;

    public List<UserDetailsConfig> getUsers() {
        return users;
    }

    public void setUsers(List<UserDetailsConfig> users) {
        this.users = users;
    }

    public static class UserDetailsConfig {
        private String username;
        private String password;
        private String roles;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getRoles() {
            return roles;
        }

        public void setRoles(String roles) {
            this.roles = roles;
        }
    }
}
