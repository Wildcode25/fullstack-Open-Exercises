sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enters new note and clicks Save
    Browser->>Server: POST /new_note (with note data)
    Server-->>Browser: 201 Created (or other success response)
    Browser-->>User: Update UI with new note

    Note right of Browser: Optionally, the Browser may make a GET request to fetch the updated list of notes
    Browser->>Server: GET /exampleapp/data.json (optional)
    Server-->>Browser: JSON (updated notes data, optional)
    Browser-->>User: Render updated notes list (optional)
