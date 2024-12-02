package jdbc;

import java.sql.*;


public class JDBCInsertUpdateDeleteSQL {
    
    public static void main(String[] args) {
//	int i = 10;
//	int result = i/0;
	Connection connection =null;
	//Load the driver class
	
	try {
//		Class.forName("com.mysql.jdbc.Driver");
//		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("Driver Loaded!");
		connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb1", "root", "mysql");
		System.out.println("Connection established!");
		Statement  statement = connection.createStatement();
		System.out.println("Statement created");

		// int noOfRows = statement.executeUpdate("insert into user values (102,'abc@c.com','Rohit','TheMaster')");
		// System.out.println(noOfRows + " inserted!");
		
		// int noOfRows = statement.executeUpdate("update user set email = 'newmail@nm.com'");
   	// int noOfRows = statement.executeUpdate("update user set email = 'NEW@r.com' , first_name ='R' where user_id = 102");
	// 		System.out.println(noOfRows + " updated!");
		
		int noOfRows = statement.executeUpdate("delete from user  where user_id = 5 ");
		// int noOfRows = statement.executeUpdate("delete from user");
		System.out.println(noOfRows + " deleted!");
				
		
	}
//	catch (ClassNotFoundException e) {

//		e.printStackTrace();
//	}
	catch (SQLException sqlException) {
		System.out.println("Error processing db operation!" + sqlException.getMessage());
	}
	finally {
		try {
			connection.close();
		} catch (SQLException sQLException) {
			System.out.println("Unable to close the connection" + sQLException.getMessage());
		}
		System.out.println("Connection closed successfully!");
	}

}
}
