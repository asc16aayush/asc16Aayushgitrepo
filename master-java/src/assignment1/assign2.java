package assignment1;

class Student {
    
    private int studentId;
    private String studentName;
    private String city;
    private int marks1;
    private int marks2;
    private int marks3;
    private float feePerMonth;
    private boolean isEligibleForScholarship;


    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setMarks1(int marks1) {
        this.marks1 = marks1;
    }

    public void setMarks2(int marks2) {
        this.marks2 = marks2;
    }

    public void setMarks3(int marks3) {
        this.marks3 = marks3;
    }

    public void setFeePerMonth(float feePerMonth) {
        this.feePerMonth = feePerMonth;
    }

    public void setIsEligibleForScholarship(boolean isEligibleForScholarship) {
        this.isEligibleForScholarship = isEligibleForScholarship;
    }

 
    public int getStudentId() {
        return studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public String getCity() {
        return city;
    }

    public int getMarks1() {
        return marks1;
    }

    public int getMarks2() {
        return marks2;
    }

    public int getMarks3() {
        return marks3;
    }

    public float getFeePerMonth() {
        return feePerMonth;
    }

    public boolean isEligibleForScholarship() {
        return isEligibleForScholarship;
    }


    public float getAnualFee() {
        return feePerMonth * 12;
    }

 
    public int getTotalMarks() {
        return marks1 + marks2 + marks3;
    }

 
    public float getAverage() {
        return (marks1 + marks2 + marks3) / 3.0f;
    }

    public String getResult() {
        if (marks1 > 60 && marks2 > 60 && marks3 > 60) {
            return "pass";
        } else {
            return "fail";
        }
    }
}
public class assign2 {

    public static void main(String[] args) {
      
        Student student1 = new Student();
        Student student2 = new Student();
        Student student3 = new Student();

       
        student1.setStudentId(1);
        student1.setStudentName("Alice");
        student1.setCity("New York");
        student1.setMarks1(85);
        student1.setMarks2(90);
        student1.setMarks3(80);
        student1.setFeePerMonth(5000);
        student1.setIsEligibleForScholarship(true);

        student2.setStudentId(2);
        student2.setStudentName("Bob");
        student2.setCity("Los Angeles");
        student2.setMarks1(70);
        student2.setMarks2(75);
        student2.setMarks3(65);
        student2.setFeePerMonth(4500);
        student2.setIsEligibleForScholarship(false);

        student3.setStudentId(3);
        student3.setStudentName("Charlie");
        student3.setCity("Chicago");
        student3.setMarks1(60);
        student3.setMarks2(55);
        student3.setMarks3(70);
        student3.setFeePerMonth(5500);
        student3.setIsEligibleForScholarship(true);

        
        Student highestMarksStudent = student1;
        if (student2.getTotalMarks() > highestMarksStudent.getTotalMarks()) {
            highestMarksStudent = student2;
        }
        if (student3.getTotalMarks() > highestMarksStudent.getTotalMarks()) {
            highestMarksStudent = student3;
        }
        System.out.println("Student with the highest total marks: " + highestMarksStudent.getStudentName());

        
        Student leastFeeStudent = student1;
        if (student2.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student2;
        }
        if (student3.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student3;
        }
        System.out.println("Student with the least monthly fee: " + leastFeeStudent.getStudentName() + ", Fee: " + leastFeeStudent.getFeePerMonth());

        
        Student[] students = {student1, student2, student3};
        for (Student student : students) {
            System.out.println("\nStudent Name: " + student.getStudentName());
            System.out.println("Total Marks: " + student.getTotalMarks());
            System.out.println("Average Marks: " + student.getAverage());
            System.out.println("Result: " + student.getResult());
            System.out.println("Scholarship: " + (student.isEligibleForScholarship() ? "Scholarship available" : "Scholarship not available"));
        }
    }
}