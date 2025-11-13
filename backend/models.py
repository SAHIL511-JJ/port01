from pydantic import BaseModel

projects = [
    {
        "name": "NLP Query Engine",
        "description": "Natural language interface for querying structured DBs + docs.",
        "slug": "nlp-query-engine",
        "github": "https://github.com/SAHIL511-JJ/nlp-engine",
        "video": "https://www.youtube.com/embed/V4By3qqHRP8"
    },
]

class Experience(BaseModel):
    role: str
    company: str
    duration: str
