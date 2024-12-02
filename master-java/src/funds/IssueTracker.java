package funds;

import java.util.Scanner;

enum Priority {
    HIGH, MEDIUM, LOW
}

class Issue {
    int issueId;
    String issueTitle;
    String issueDescription;
    String status;
    Priority priority;

    public Issue(int issueId, String issueTitle, String issueDescription, String status, Priority priority) {
        this.issueId = issueId;
        this.issueTitle = issueTitle;
        this.issueDescription = issueDescription;
        this.status = status;
        this.priority = priority;
    }

    public void printIssue() {
        System.out.println("Issue ID: " + issueId);
        System.out.println("Title: " + issueTitle);
        System.out.println("Description: " + issueDescription);
        System.out.println("Status: " + status);
        System.out.println("Priority: " + priority);
        System.out.println("----------------------------");
    }
}

public class IssueTracker {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the number of issue you want to enroll :");
        int n=scanner.nextInt();

        Issue[] issues = new Issue[n];

        for (int i = 0; i < issues.length; i++) {
            System.out.println("Enter details for Issue " + (i + 1));
            System.out.print("Enter Issue ID: ");
            int issueId = scanner.nextInt();
            scanner.nextLine();

            System.out.print("Enter Issue Title: ");
            String issueTitle = scanner.nextLine();

            System.out.print("Enter Issue Description: ");
            String issueDescription = scanner.nextLine();

            System.out.print("Enter Status (e.g., Open, Closed, In Progress): ");
            String status = scanner.nextLine();

            System.out.print("Enter Priority (HIGH, MEDIUM, LOW): ");
            String priorityInput = scanner.nextLine().toUpperCase();

            Priority priority;
            try {
                priority = Priority.valueOf(priorityInput);
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid priority. Setting to MEDIUM by default.");
                priority = Priority.MEDIUM;
            }

            issues[i] = new Issue(issueId, issueTitle, issueDescription, status, priority);
            System.out.println("----------------------------");
        }

        for (int i = 0; i < 3; i++) {
            System.out.print("Enter an Issue ID to search: ");
            int searchId = scanner.nextInt();

            searchIssueById(issues, searchId);
        }
        scanner.close();
    }

    public static void searchIssueById(Issue[] issues, int searchId) {
        boolean found = false;
        for (Issue issue : issues) {
            if (issue.issueId == searchId) {
                issue.printIssue();
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Issue with ID " + searchId + " not found.");
        }
    }
}
