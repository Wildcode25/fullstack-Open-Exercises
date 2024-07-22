sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET /exampleapp/spa
    Server-->>Browser: HTML + JavaScript (SPA)
    Browser-->>User: Render SPA page

    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON (notes data)
    Browser-->>User: Render notes in SPA
