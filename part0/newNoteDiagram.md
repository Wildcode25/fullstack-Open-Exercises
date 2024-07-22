sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: HTML + JavaScript
    Browser-->>User: Render notes page

    User->>Browser: Write note in text field
    User->>Browser: Click Save button
    Browser->>Server: POST /exampleapp/new_note (note data)
    Server-->>Browser: Response (redirect)
    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: Updated notes list
    Browser-->>User: Render updated notes page
