package yonk.dev.labweek03.EmployeeDao;

import yonk.dev.labweek03.models.Employee;

import java.util.List;

public interface EmployeeDao {

    public void addEmployee(Employee emp);

    public void deleteEmployee(long id);

    public Employee getById(long id);

    public List<Employee> getEmpList_Mapper();

    public List<Employee> getEmpList();
}
