// Represents the structure of a single Issue in the Issue Tracking System
// Represents the structure of a single Issue in the Issue Tracking System
// model.ts
export interface Issue {
    id: string;           // Keep the ID as a string
    title: string;
    description: string;
    priority: string;
    status: string;
    assignee: string;
    lastUpdated: string;
  }
  
  
  // Represents a User in the system (used for authentication)
  export interface User {
    id: number;       // Unique identifier for the user
    username: string; // Username for login
    password: string; // Password for authentication
  }
  
  // Optional: If you'd like to represent the state of the application or any other additional entities
  export interface SearchCriteria {
    query: string;  // Search string for filtering issues
    status?: string;  // Optional filter by status
    priority?: string;  // Optional filter by priority
  }
  