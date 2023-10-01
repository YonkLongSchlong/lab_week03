package yonk.dev.labweek03.EmployeeDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNullApi;
import yonk.dev.labweek03.models.Employee;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class EmployeeDaoImpl implements EmployeeDao{

    private final JdbcTemplate jdbcTemplate;


    private DataSource dataSource;


    public EmployeeDaoImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public void addEmployee(Employee emp) {
        String sql = "INSERT INTO employee (role,name) VALUE (?,?)";
        jdbcTemplate.update(sql, emp.getRole(), emp.getName());
    }

    @Override
    public void deleteEmployee(long id) {
        String sql = "DELETE FROM employee  WHERE id = " + id;
        jdbcTemplate.update(sql);
    }

    @Override
    public Employee getById(long id) {
        String sql = "SELECT * FROM employee WHERE id = "+ id;
        return jdbcTemplate.queryForObject(sql, new RowMapper<Employee>() {
            @Override
            public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
                Employee employee = new Employee();
                employee.setId(rs.getLong("emp_id"));
                employee.setName(rs.getString("name"));
                employee.setRole(rs.getString("role"));
                return employee;
            }
        });
    }

    @Override
    public List<Employee> getEmpList_Mapper() {
        String sql = "SELECT * FROM employee";
        return jdbcTemplate.query(sql, new RowMapper<Employee>() {
            @Override
            public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
                Employee employee = new Employee();
                employee.setId(rs.getLong("emp_id"));
                employee.setRole(rs.getString("role"));
                employee.setName(rs.getString("name"));
                return employee;
            }
        });
    }

    @Override
    public List<Employee> getEmpList() {
        String sql = "SELECT * FROM employee";

//        var rowMapper = BeanPropertyRowMapper.newInstance(Employee.class);
//        return jdbcTemplate.query(sql, rowMapper);

        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Employee.class));
    }
}
