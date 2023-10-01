package yonk.dev.labweek03.models;

import org.springframework.data.relational.core.mapping.Table;

public class Employee {
    private long id;
    private String role;
    private String name;

    public Employee() {
    }

    public Employee(long id, String role, String name) {
        this.id = id;
        this.role = role;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
