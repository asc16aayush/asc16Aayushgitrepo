package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCSelect {
    public static void main(String[] args) {
        try{

        System.out.println("estlablish a connection to the database ");
        Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/TESTDB1", "root", "mysql");

        System.out.println("create the statement/query");
        Statement statement=connection.createStatement();

        System.out.println("execute the query");
        ResultSet resultSet=statement.executeQuery("select * from user");

        System.out.println("process the result");
        while(resultSet.next()){
            System.out.println(resultSet.getInt(1)+"\t\t\t"+resultSet.getString(2)+"\t\t\t\t"+resultSet.getString("last_name"));
        }
        
        }
        catch(SQLException ex){
            System.out.println("connection not found (sql error)"+ex.getMessage());

        }

    }
    
}
