localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "description": "Prepare the monthly sales report.",
                "taskDate": "2025-01-02",
                "category": "Work",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "description": "Attend the weekly team meeting.",
                "taskDate": "2025-01-03",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Client Follow-Up",
                "description": "Send follow-up emails to clients.",
                "taskDate": "2025-01-04",
                "category": "Communication",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update Database",
                "description": "Ensure all records are updated.",
                "taskDate": "2025-01-02",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Project Planning",
                "description": "Plan the upcoming project details.",
                "taskDate": "2025-01-05",
                "category": "Planning",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Vihaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "description": "Review the codebase for potential issues.",
                "taskDate": "2025-01-02",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixes",
                "description": "Resolve reported bugs.",
                "taskDate": "2025-01-06",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Prepare Presentation",
                "description": "Prepare slides for the team meeting.",
                "taskDate": "2025-01-07",
                "category": "Presentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Ananya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Market Research",
                "description": "Conduct research for new product launches.",
                "taskDate": "2025-01-04",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Budget",
                "description": "Work on the quarterly budget plan.",
                "taskDate": "2025-01-05",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Priya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Social Media Updates",
                "description": "Update posts on social media channels.",
                "taskDate": "2025-01-03",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Inventory Check",
                "description": "Perform a detailed inventory check.",
                "taskDate": "2025-01-06",
                "category": "Inventory",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}
