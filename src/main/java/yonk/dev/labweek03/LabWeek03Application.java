package yonk.dev.labweek03;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import yonk.dev.labweek03.EmployeeDao.EmployeeDaoImpl;
import yonk.dev.labweek03.models.Employee;

import java.util.List;

@SpringBootApplication
public class LabWeek03Application {

    EmployeeDaoImpl employeeDao;

    public static void main(String[] args) {
        SpringApplication.run(LabWeek03Application.class, args);
    }

    @Bean
    public CommandLineRunner emxaple(){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Employee emp = new Employee(1,"Manager","Yonk");
                employeeDao.addEmployee(emp);

                List<Employee> empList1 = employeeDao.getEmpList_Mapper();
                empList1.forEach(
                        System.out::println
                );

                List<Employee> empList2 = employeeDao.getEmpList();
                empList2.forEach(
                        System.out::println
                );

                Employee employee = employeeDao.getById(1);
                System.out.println(employee);

                employeeDao.deleteEmployee(1);
            }
        };
    }

}
