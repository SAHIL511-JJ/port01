from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import projects, Experience

app = FastAPI()

# Allow Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/projects")
def get_projects():
    return projects

@app.get("/projects/{slug}")
def get_project(slug: str):
    for p in projects:
        if p["slug"] == slug:
            return p
    raise HTTPException(status_code=404, detail="Project not found")

@app.get("/experience")
def get_experience():
    return [
        {"role": "Automation Tester Intern", "company": "Ekam Apps", "duration": "2024"},
        # add more later
    ]
